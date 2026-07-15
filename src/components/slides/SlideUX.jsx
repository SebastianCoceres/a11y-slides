import { Slide, Stack } from '@revealjs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field';

const fieldTheme = 'bg-gray-900 border-gray-700 text-gray-200 placeholder:text-gray-500';
const primaryButtonTheme = 'w-full bg-gray-100 text-gray-900 hover:bg-white font-semibold';

const roomOptions = [
  { label: 'Habitación estándar', value: 'standard' },
  { label: 'Suite', value: 'suite' },
];

export default function SlideUX() {
  return (
    <Stack>
      {/* Diapositiva 1: Título */}
      <Slide>
        <h2 className="text-4xl text-green-300 mb-4">1. Experiencia de Usuario (UX)</h2>
        <p className="text-lg italic text-gray-500">"Funciona" no significa "usable".</p>
      </Slide>

      {/* Diapositiva 2: Todo Junto */}
      <Slide>
        <div className="min-h-full flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl border border-gray-700 text-left">
            <FieldGroup className="gap-3">
              <Field>
                <FieldLabel className="text-gray-300">Check-in</FieldLabel>
                <Input type="date" className={fieldTheme} />
              </Field>
              <Field>
                <FieldLabel className="text-gray-300">Check-out</FieldLabel>
                <Input type="date" className={fieldTheme} />
              </Field>
              <Field>
                <FieldLabel className="text-gray-300">Huéspedes</FieldLabel>
                <Input type="number" placeholder="2" className={fieldTheme} />
              </Field>
              <Field>
                <FieldLabel className="text-gray-300">Habitación</FieldLabel>
                <Select items={roomOptions} defaultValue="standard">
                  <SelectTrigger className={`w-full ${fieldTheme}`}>
                    <SelectValue placeholder="Habitación estándar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {roomOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="ux1-breakfast" />
                <FieldLabel htmlFor="ux1-breakfast" className="text-gray-300">Desayuno</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="ux1-parking" />
                <FieldLabel htmlFor="ux1-parking" className="text-gray-300">Parking</FieldLabel>
              </Field>
              <Field>
                <FieldLabel className="text-gray-300">Nombre</FieldLabel>
                <Input placeholder="Nombre completo" className={fieldTheme} />
              </Field>
              <Field>
                <FieldLabel className="text-gray-300">Email</FieldLabel>
                <Input type="email" placeholder="Email" className={fieldTheme} />
              </Field>
              <Button className={primaryButtonTheme}>Reservar</Button>
            </FieldGroup>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 3: Organizado, Sin Pasos */}
      <Slide>
        <div className="min-h-full flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl border border-gray-700 text-left">
            <FieldGroup className="gap-4">
              <FieldSet>
                <FieldLegend variant="label" className="text-gray-400">Fechas y huéspedes</FieldLegend>
                <FieldGroup className="gap-3">
                  <div className="flex gap-3">
                    <Field>
                      <FieldLabel className="text-gray-300">Check-in</FieldLabel>
                      <Input type="date" className={fieldTheme} />
                    </Field>
                    <Field>
                      <FieldLabel className="text-gray-300">Check-out</FieldLabel>
                      <Input type="date" className={fieldTheme} />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel className="text-gray-300">Huéspedes</FieldLabel>
                    <Input type="number" placeholder="2" className={fieldTheme} />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldLegend variant="label" className="text-gray-400">Habitación y extras</FieldLegend>
                <FieldGroup className="gap-3">
                  <Field>
                    <FieldLabel className="text-gray-300">Habitación</FieldLabel>
                    <Select items={roomOptions} defaultValue="standard">
                      <SelectTrigger className={`w-full ${fieldTheme}`}>
                        <SelectValue placeholder="Habitación estándar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {roomOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field orientation="horizontal">
                    <Checkbox id="ux2-breakfast" />
                    <FieldLabel htmlFor="ux2-breakfast" className="text-gray-300">Desayuno incluido</FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldLegend variant="label" className="text-gray-400">Tus datos</FieldLegend>
                <FieldGroup className="gap-3">
                  <Field>
                    <FieldLabel className="text-gray-300">Nombre</FieldLabel>
                    <Input placeholder="Nombre completo" className={fieldTheme} />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <Button className={primaryButtonTheme}>Reservar</Button>
            </FieldGroup>
          </div>
        </div>
      </Slide>

      {/* Diapositiva 4: Selección por Pasos */}
      <Slide>
        <div className="min-h-full flex items-center justify-center">
          <Card className="w-full max-w-md bg-gray-950 border-gray-600 text-left">
            <div className="p-6">
              <div className="flex items-center gap-1 mb-6 text-xs text-gray-400">
                <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">1</span>
                <span>Fechas</span>
                <span className="flex-1 h-px bg-gray-700 mx-1" />
                <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 font-bold">2</span>
                <span className="text-gray-100">Habitación</span>
                <span className="flex-1 h-px bg-gray-700 mx-1" />
                <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-gray-300">3</span>
                <span>Datos</span>
              </div>

              <RadioGroup defaultValue="standard" className="gap-3 mb-6">
                <FieldLabel htmlFor="ux3-standard">
                  <Field orientation="horizontal" className="border-gray-700 bg-gray-900 has-data-checked:border-gray-300 has-data-checked:bg-gray-800">
                    <RadioGroupItem value="standard" id="ux3-standard" />
                    <FieldContent>
                      <FieldTitle className="text-gray-100">Habitación Estándar</FieldTitle>
                      <FieldDescription className="text-gray-400">$80/noche</FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="ux3-suite">
                  <Field orientation="horizontal" className="border-gray-700 bg-gray-900 has-data-checked:border-gray-300 has-data-checked:bg-gray-800">
                    <RadioGroupItem value="suite" id="ux3-suite" />
                    <FieldContent>
                      <FieldTitle className="text-gray-100">Suite</FieldTitle>
                      <FieldDescription className="text-gray-400">$140/noche</FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              </RadioGroup>

              <div className="bg-gray-900 rounded-lg p-3 text-xs text-gray-400 space-y-1 mb-5">
                <div className="flex justify-between"><span>Fechas</span><span className="text-gray-200">12–15 Ago</span></div>
                <div className="flex justify-between"><span>Huéspedes</span><span className="text-gray-200">2</span></div>
                <div className="flex justify-between"><span>Habitación</span><span className="text-gray-200">Estándar</span></div>
              </div>

              <Button className={primaryButtonTheme}>Continuar</Button>
            </div>
          </Card>
        </div>
      </Slide>
    </Stack>
  );
}
