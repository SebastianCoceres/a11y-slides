import { useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { NOTES_CHANNEL } from '@/components/deck/notesChannel';
import guionRaw from '../../GUION.md?raw';

const ID_MARKER = /^<!--\s*id:(\w+)\s*-->\s*$/;
const DIVIDER = /^---\s*$/;
const HEADING = /^##\s+/;

const markdownComponents = {
  h1: (props) => <h1 className="mb-2 text-2xl font-bold text-brand-light" {...props} />,
  h2: (props) => (
    <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-brand" {...props} />
  ),
  p: (props) => <p className="mb-3 text-base leading-relaxed text-gray-300 last:mb-0" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  ul: (props) => <ul className="mb-3 list-disc space-y-1 pl-5 text-gray-300 last:mb-0" {...props} />,
  li: (props) => <li {...props} />,
  code: (props) => (
    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-sm text-teal-300" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-2 border-white/20 pl-3 italic text-gray-500" {...props} />
  ),
};

function parseSections(markdown) {
  const lines = markdown.split('\n');
  const sections = [];
  let current = { id: null, lines: [] };

  const flush = () => {
    if (current.lines.some((line) => line.trim() !== '')) sections.push(current);
  };

  for (const line of lines) {
    if (DIVIDER.test(line)) {
      flush();
      current = { id: null, lines: [] };
      continue;
    }
    const marker = line.match(ID_MARKER);
    if (marker) {
      flush();
      current = { id: marker[1], lines: [] };
      continue;
    }
    if (HEADING.test(line)) {
      flush();
      current = { id: null, lines: [line] };
      continue;
    }
    current.lines.push(line);
  }
  flush();

  return sections.map((section) => ({ ...section, content: section.lines.join('\n').trim() }));
}

export default function PresenterNotes() {
  const sections = useMemo(() => parseSections(guionRaw), []);
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [connected, setConnected] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const channel = new BroadcastChannel(NOTES_CHANNEL);
    channel.onmessage = (event) => {
      if (event.data?.type !== 'slide') return;
      setConnected(true);
      setActiveTopicId(event.data.topicId);
    };
    channel.postMessage({ type: 'requestState' });
    return () => channel.close();
  }, []);

  useEffect(() => {
    if (!activeTopicId) return;
    sectionRefs.current[activeTopicId]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [activeTopicId]);

  return (
    <div className="min-h-screen bg-[#0c0e14] px-6 py-10 text-gray-300">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center gap-2 text-xs">
          <span className={`h-2 w-2 rounded-full ${connected ? 'bg-emerald-400' : 'bg-gray-600'}`} />
          <span className="text-gray-500">
            {connected ? 'Sincronizado con la presentación' : 'Esperando la presentación...'}
          </span>
        </div>
        <div className="space-y-5">
          {sections.map((section, i) =>
            section.id ? (
              <div
                key={i}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className={`rounded-xl border p-5 transition-colors ${
                  section.id === activeTopicId
                    ? 'border-brand bg-brand/10'
                    : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                <ReactMarkdown components={markdownComponents}>{section.content}</ReactMarkdown>
              </div>
            ) : (
              <div key={i} className="px-1 pt-4 first:pt-0">
                <ReactMarkdown components={markdownComponents}>{section.content}</ReactMarkdown>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
