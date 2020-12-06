export class FichaTecnica {

  public id: string = '';
  public codigoFichaTecnica: string = '';
  public equipoId: string = '';
  public fechaElaboracion: Date = null;
  public nombreResponsable: string = '';
  public descripcionEquipo: string = '';
  public tipoEquipo: string = '';
  public modeloEquipo: string = '';
  public numeroSerieEquipo: string = '';
  public anioFabricacion: number = 0;
  public nombreFabricante: string = '';
  public telefonoFabricante: string= '';
  public nombreProveedor: string= '';
  public telefonoProveedor: string= '';
  public nombresProveedoresRepuestos: string= '';
  public fechaCompra: Date = null;
  public fechaInstalacion: Date = null;
  public costoAdquisicion: number = 0;
  public costoReemplazo: number = 0;
  public garantia: boolean = false;
  public vencimientoGarantia: Date = null;
  public contratoMantenimiento: boolean = false;
  public vencimientoContratoMantenimiento: Date = null;
  public vidaUtilEsperada: number = 0;
  public incluyeManuales: boolean = false;
  public incluyePlanos: boolean = false;
  public incluyeCD: boolean = false;
  public voltage: number = 0;
  public amperaje: number = 0;
  public cantidadFases: number = 0;
  public pesoKg: number = 0;
  public dimensiones: object = null;
  public incluyeHerramientas: boolean =  false;
  public descripcionHerramientas: string = '';
  public observaciones: string = '';


}
