import { Slide } from '@revealjs/react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SlideUXStates() {
  return (
    <Slide>
      <h2 className="text-4xl text-green-300 mb-8">Gestión de Estados</h2>
      <p className="text-xl text-left mb-8 text-gray-300">Más allá de un simple spinner de <code>loading</code>:</p>

      <div className="grid grid-cols-3 gap-6 text-sm text-left">
        {/* Skeleton con shadcn */}
        <Card className="bg-gray-950 border-gray-800">
          <CardContent className="p-4">
            <div className="font-bold text-gray-400 mb-4">Skeleton (Carga)</div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-2 w-full bg-gray-800" />
                <Skeleton className="h-2 w-4/5 bg-gray-800" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <Card className="bg-gray-950 border-gray-800 flex flex-col items-center justify-center text-center h-40">
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <div className="text-gray-500 mb-2">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            </div>
            <div className="font-bold text-gray-300">Sin datos</div>
            <p className="text-xs text-gray-500 mt-1">Aún no hay registros.</p>
          </CardContent>
        </Card>

        {/* Error Parcial con shadcn Alert */}
        <div className="flex flex-col gap-2">
          <div className="font-bold text-yellow-400 ml-1">Error Parcial</div>
          <Alert variant="destructive" className="bg-yellow-950 border-yellow-600 text-yellow-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <AlertTitle className="mb-1 text-sm font-bold">Advertencia</AlertTitle>
            <AlertDescription className="text-xs">
              No pudimos cargar la gráfica secundaria, pero tus datos principales están listos.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </Slide>
  );
}
