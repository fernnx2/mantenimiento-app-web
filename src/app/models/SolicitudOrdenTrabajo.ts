export class SolicitudOrdenTrabajo {
  id: string;
  nombreSolicitante: string;
  fechaHoraSolicitud: Date;
  referenciaOrdenTrabajo: string;
  codigoEquipo: string;
  esFallaEmergencia: boolean;
  esFallaCorrectiva: boolean;
  causaFalla: string;
  descripcionFalla: string;
  fechaProgramacionTrabajo: Date
  estatus: string
}
