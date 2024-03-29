﻿function CrearEmpleado() {
    let User = Cookies.get('IdUser');
    let NombreEmpleado = $('#InputNombreEmpleado').val();
    let ApellidoEmpleado = $('#InputApellidoEmpleado').val();
    let IdTipoDocumento = $('#SelectTipoDocumento').val();
    let Identificacion = $('#InputIdentificacionEmpleado').val();   
    if (NombreEmpleado == null || NombreEmpleado == '' || NombreEmpleado == undefined) {
        Swal.fire('Mensaje del Sistema', 'Ingrese el nombre', 'info');
    } else if (ApellidoEmpleado == undefined || ApellidoEmpleado == null || ApellidoEmpleado == '') {
        Swal.fire('Mensaje del Sistema', 'Ingrese el apellido', 'info');
    } else if (IdTipoDocumento == -1 || IdTipoDocumento == null || IdTipoDocumento == '') {
        Swal.fire('Mensaje del Sistema', 'Seleccione tipo documento', 'info');
    } else if (Identificacion == undefined || Identificacion == null || Identificacion == '') {
        Swal.fire('Mensaje del Sistema', 'Ingrese número de identificación', 'info');
    } else {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Empleado/CrearEmpleado',
            data: {
                IdUser: User,
                NombreEmpleado: NombreEmpleado,
                ApellidoEmpleado: ApellidoEmpleado,
                IdTipoDocumento: IdTipoDocumento,
                Identificacion: Identificacion,
            },
            success: function (resultado) {
                valor = resultado.split('*');
                if (valor[0] == 'OK') {
                    Swal.fire({
                        title: 'Mensaje del Sistema',
                        text: valor[1],
                        icon: 'success',
                    }).then((result) => {
                        window.location.href = '/Empleado';
                    })
                } else {
                    Swal.fire('Mensaje del Sistema', valor[1], 'info');
                }
            }
        });
    }
}

function CargarDatosCabeceraEmpleado() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosCabeceraEmpleado',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {
            $('#LabelNombreEmpleado').text(resultado[0].NombreEmpleado);
            $('#LabelDocumentoIdentificacion').text(resultado[0].Identificacion);
        }
    });
}


function CargarDatosHVEmpleado() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosHVEmpleado',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {
            $('#InputHVNacionalidad').text(resultado[0].Nacionalidad);
            $('#InputHVFechaNacimiento').text(resultado[0].FechaNacimiento);
            $('#InputHVLugarNacimiento').text(resultado[0].LugarNacimiento);
            $('#InputHVSexo').text(resultado[0].Sexo);
            $('#InputHVEstadoCivil').text(resultado[0].EstadoCivil);
            $('#InputHVEmail').text(resultado[0].Email);
            $('#InputHVTelefono1').text(resultado[0].Telefono1);
            $('#InputHVTelefono2').text(resultado[0].Telefono2);
            $('#InputHVPaisResidencia').text(resultado[0].PaisResidencia);
            $('#InputHVDepartamentoResidencia').text(resultado[0].DepartamentoResidencia);
            $('#InputHVCiudadResidencia').text(resultado[0].CiudadResidencia);
            $('#InputHVDireccionResidencia').text(resultado[0].DireccionResidencia);
            $('#InputHVTipoVivienda').text(resultado[0].TipoVivienda);
            $('#InputHVNombreArrendador').text(resultado[0].NombreArrendador);
            $('#InputHVTelefonoArrendador').text(resultado[0].TelefonoArrendador); 
            $('#InputHVTiempoResidiendo').text(resultado[0].TiempoResidiendo);
            $('#InputHVNombreRF1').text(resultado[0].NombreRF1);
            $('#InputHVParentescoRF1').text(resultado[0].ParentescoRF1);
            $('#InputHVTelefonoRF1').text(resultado[0].TelefonoRF1);
            $('#InputHVProfesionRF1').text(resultado[0].ProfesionRF1);
            $('#InputHVNombreRF2').text(resultado[0].NombreRF2);
            $('#InputHVParentescoRF2').text(resultado[0].ParentescoRF2);
            $('#InputHVTelefonoRF2').text(resultado[0].TelefonoRF2);
            $('#InputHVProfesionRF2').text(resultado[0].ProfesionRF2);
            $('#InputHVNombreRP1').text(resultado[0].NombreRP1);
            $('#InputHVDireccionRP1').text(resultado[0].DireccionRP1);
            $('#InputHVTelefonoRP1').text(resultado[0].TelefonoRP1);
            $('#InputHVProfesionRP1').text(resultado[0].ProfesionRP1);
            $('#InputHVNombreRP2').text(resultado[0].NombreRP2);
            $('#InputHVDireccionRP2').text(resultado[0].DireccionRP2);
            $('#InputHVTelefonoRP2').text(resultado[0].TelefonoRP2);
            $('#InputHVProfesionRP2').text(resultado[0].ProfesionRP2);
        }
    });
}

function CargarDatosPersonales() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosPersonales',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {            
            $('#SelectPaisNacionalidad').val(resultado[0].IdNacionalidad);
            $('#InputFechaNacimientoEmpleado').val(resultado[0].FechaNacimiento);
            $('#InputLugarNacimientoEmpleado').val(resultado[0].LugarNacimiento);
            $('#SelectSexoEmpleado').val(resultado[0].IdSexo);
            $('#SelectTipoEstadoCivil').val(resultado[0].IdEstadoCivil);
            $('#InputEmailEmpleado').val(resultado[0].Email);
            $('#InputTelefono1Empleado').val(resultado[0].Telefono1);
            $('#InputTelefono2Empleado').val(resultado[0].Telefono2);
        }
    });    
    $('#ModalDatosPersonalesEmpleado').modal('show')
}


function GuardarCambiosDatosPersonales() {
    let User = Cookies.get('IdUser');
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    let IdNacionalidad = $('#SelectPaisNacionalidad').val();
    let FechaNacimientoEmpleado = $('#InputFechaNacimientoEmpleado').val();
    let LugarNacimientoEmpleado = $('#InputLugarNacimientoEmpleado').val();
    let IdSexoEmpleado = $('#SelectSexoEmpleado').val();
    let IdTipoEstadoCivil = $('#SelectTipoEstadoCivil').val();
    let EmailEmpleado = $('#InputEmailEmpleado').val();
    let Telefono1Empleado = $('#InputTelefono1Empleado').val();
    let Telefono2Empleado = $('#InputTelefono2Empleado').val();
    if (IdNacionalidad == '' || IdNacionalidad == null || IdNacionalidad == -1) {
        Swal.fire('Mensaje del Sistema', 'Seleccione nacionalidad', 'info');
    } else if (IdSexoEmpleado == '' || IdSexoEmpleado == null || IdSexoEmpleado == -1) {
        Swal.fire('Mensaje del Sistema', 'Seleccione el sexo', 'info');
    } else if (IdTipoEstadoCivil == '' || IdTipoEstadoCivil == null || IdTipoEstadoCivil == -1) {
        Swal.fire('Mensaje del Sistema', 'Seleccione estado civil', 'info');
    } else {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Empleado/GuardarCambiosDatosPersonales',
            data: {
                IdEmpleado: IdEmpleado,
                IdUser: User,
                IdNacionalidad: IdNacionalidad,
                FechaNacimientoEmpleado: FechaNacimientoEmpleado,
                LugarNacimientoEmpleado: LugarNacimientoEmpleado,
                IdSexoEmpleado: IdSexoEmpleado,
                IdTipoEstadoCivil: IdTipoEstadoCivil,
                EmailEmpleado: EmailEmpleado,
                Telefono1Empleado: Telefono1Empleado,
                Telefono2Empleado: Telefono2Empleado
            },
            success: function (resultado) {
                valor = resultado.split('*');
                if (valor[0] == 'OK') {
                    Swal.fire({
                        title: 'Mensaje del Sistema',
                        text: valor[1],
                        icon: 'success',
                    }).then((result) => {
                        window.location.href = '/Empleado/Hoja_Vida_Empleado';
                    })
                } else {
                    Swal.fire('Mensaje del Sistema', valor[1], 'info');
                }
            }
        });
    }
}



function CargarDatosResidencia() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosResidencia',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {
            $('#SelectPais').val(resultado[0].IdPais);
            $('#SelectDepartamento').val(resultado[0].IdDepartamento);
            $('#SelectCiudad').val(resultado[0].IdCiudad);
            $('#InputDireccionEmpleado').val(resultado[0].DireccionResidencia);
            $('#SelectTipoVivienda').val(resultado[0].IdTipoVivienda);
            $('#InputNombreArrendador').val(resultado[0].NombreArrendador);
            $('#InputTelefonoArrendador').val(resultado[0].TelefonoArrendador);
            $('#InputTiempoResidiendo').val(resultado[0].TiempoResidiendo);
        }
    });
    $('#ModalDatosResidenciaEmpleado').modal('show')
}


function GuardarCambiosDatosResidencia() {
    let User = Cookies.get('IdUser');
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    let IdCiudad = $('#SelectCiudad').val();
    let DireccionEmpleado = $('#InputDireccionEmpleado').val();
    let IdTipoVivienda = $('#SelectTipoVivienda').val();
    let NombreArrendador = $('#InputNombreArrendador').val();
    let TelefonoArrendador = $('#InputTelefonoArrendador').val();
    let TiempoResidiendo = $('#InputTiempoResidiendo').val();
    if (IdCiudad == '' || IdCiudad == null || IdCiudad == -1) {
        Swal.fire('Mensaje del Sistema', 'Seleccione la ciudad', 'info');
    } else if (IdTipoVivienda == '' || IdTipoVivienda == null || IdTipoVivienda == -1) {
        Swal.fire('Mensaje del Sistema', 'Seleccione el tipo de vivienda', 'info');
    } else {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '/Empleado/GuardarCambiosDatosResidencia',
            data: {
                IdEmpleado: IdEmpleado,
                IdUser: User,
                IdCiudad: IdCiudad,
                DireccionEmpleado: DireccionEmpleado,
                IdTipoVivienda: IdTipoVivienda,
                NombreArrendador: NombreArrendador,
                TelefonoArrendador: TelefonoArrendador,
                TiempoResidiendo: TiempoResidiendo,
            },
            success: function (resultado) {
                valor = resultado.split('*');
                if (valor[0] == 'OK') {
                    Swal.fire({
                        title: 'Mensaje del Sistema',
                        text: valor[1],
                        icon: 'success',
                    }).then((result) => {
                        window.location.href = '/Empleado/Hoja_Vida_Empleado';
                    })
                } else {
                    Swal.fire('Mensaje del Sistema', valor[1], 'info');
                }
            }
        });
    }
}


function CargarDatosRFEmpleado() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosRFEmpleado',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {
            $('#InputNombreRF1Empleado').val(resultado[0].NombreRF1Empleado);
            $('#InputParentescoRF1Empleado').val(resultado[0].ParentescoRF1Empleado);
            $('#InputTelefonoRF1Empleado').val(resultado[0].TelefonoRF1Empleado);
            $('#InputProfesionRF1Empleado').val(resultado[0].ProfesionRF1Empleado);
            $('#InputNombreRF2Empleado').val(resultado[0].NombreRF2Empleado);
            $('#InputParentescoRF2Empleado').val(resultado[0].ParentescoRF2Empleado);
            $('#InputTelefonoRF2Empleado').val(resultado[0].TelefonoRF2Empleado);
            $('#InputProfesionRF2Empleado').val(resultado[0].ProfesionRF2Empleado);
        }
    });
    $('#ModalDatosRFEmpleado').modal('show')
}

function GuardarCambiosRFEmpleado() {
    let User = Cookies.get('IdUser');
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    let NombreRF1Empleado = $('#InputNombreRF1Empleado').val();
    let ParentescoRF1Empleado = $('#InputParentescoRF1Empleado').val();
    let TelefonoRF1Empleado = $('#InputTelefonoRF1Empleado').val();
    let ProfesionRF1Empleado = $('#InputProfesionRF1Empleado').val();
    let NombreRF2Empleado = $('#InputNombreRF2Empleado').val();
    let ParentescoRF2Empleado = $('#InputParentescoRF2Empleado').val();
    let TelefonoRF2Empleado = $('#InputTelefonoRF2Empleado').val();
    let ProfesionRF2Empleado = $('#InputProfesionRF2Empleado').val();
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/GuardarCambiosRFEmpleado',
        data: {
            IdEmpleado: IdEmpleado,
            IdUser: User,
            NombreRF1Empleado: NombreRF1Empleado,
            ParentescoRF1Empleado: ParentescoRF1Empleado,
            TelefonoRF1Empleado: TelefonoRF1Empleado,
            ProfesionRF1Empleado: ProfesionRF1Empleado,
            NombreRF2Empleado: NombreRF2Empleado,
            ParentescoRF2Empleado: ParentescoRF2Empleado,
            TelefonoRF2Empleado: TelefonoRF2Empleado,
            ProfesionRF2Empleado: ProfesionRF2Empleado
        },
        success: function (resultado) {
            valor = resultado.split('*');
            if (valor[0] == 'OK') {
                Swal.fire({
                    title: 'Mensaje del Sistema',
                    text: valor[1],
                    icon: 'success',
                }).then((result) => {
                    window.location.href = '/Empleado/Hoja_Vida_Empleado';
                })
            } else {
                Swal.fire('Mensaje del Sistema', valor[1], 'info');
            }
        }
    });    
}

function CargarDatosRPEmpleado() {
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/CargarDatosRPEmpleado',
        data: { IdEmpleado: IdEmpleado },
        success: function (resultado) {
            $('#InputNombreRP1Empleado').val(resultado[0].NombreRP1Empleado);
            $('#InputDireccionRP1Empleado').val(resultado[0].DireccionRP1Empleado);
            $('#InputTelefonoRP1Empleado').val(resultado[0].TelefonoRP1Empleado);
            $('#InputProfesionRP1Empleado').val(resultado[0].ProfesionRP1Empleado);
            $('#InputNombreRP2Empleado').val(resultado[0].NombreRP2Empleado);
            $('#InputDireccionRP2Empleado').val(resultado[0].DireccionRP2Empleado);
            $('#InputTelefonoRP2Empleado').val(resultado[0].TelefonoRP2Empleado);
            $('#InputProfesionRP2Empleado').val(resultado[0].ProfesionRP2Empleado);
        }
    });
    $('#ModalDatosRPEmpleado').modal('show')
}

function GuardarCambiosRPEmpleado() {
    let User = Cookies.get('IdUser');
    let IdEmpleado = Cookies.get('IdHVEmpleado');
    let NombreRP1Empleado = $('#InputNombreRP1Empleado').val();
    let DireccionRP1Empleado = $('#InputDireccionRP1Empleado').val();
    let TelefonoRP1Empleado = $('#InputTelefonoRP1Empleado').val();
    let ProfesionRP1Empleado = $('#InputProfesionRP1Empleado').val();
    let NombreRP2Empleado = $('#InputNombreRP2Empleado').val();
    let DireccionRP2Empleado = $('#InputDireccionRP2Empleado').val();
    let TelefonoRP2Empleado = $('#InputTelefonoRP2Empleado').val();
    let ProfesionRP2Empleado = $('#InputProfesionRP2Empleado').val();
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/GuardarCambiosRPEmpleado',
        data: {
            IdEmpleado: IdEmpleado,
            IdUser: User,
            NombreRP1Empleado: NombreRP1Empleado,
            DireccionRP1Empleado: DireccionRP1Empleado,
            TelefonoRP1Empleado: TelefonoRP1Empleado,
            ProfesionRP1Empleado: ProfesionRP1Empleado,
            NombreRP2Empleado: NombreRP2Empleado,
            DireccionRP2Empleado: DireccionRP2Empleado,
            TelefonoRP2Empleado: TelefonoRP2Empleado,
            ProfesionRP2Empleado: ProfesionRP2Empleado
        },
        success: function (resultado) {
            valor = resultado.split('*');
            if (valor[0] == 'OK') {
                Swal.fire({
                    title: 'Mensaje del Sistema',
                    text: valor[1],
                    icon: 'success',
                }).then((result) => {
                    window.location.href = '/Empleado/Hoja_Vida_Empleado';
                })
            } else {
                Swal.fire('Mensaje del Sistema', valor[1], 'info');
            }
        }
    });
}

function GridEmpleado() {
    let datatable = $('#gridEmpleado').DataTable({
        "responsive": true,
        dom: 'B<"clear">frtip',
        buttons: [{
            extend: 'excelHtml5',
            footer: true,
            title: 'Lista de Empleado',
            filename: 'Lista de Empleado',
            text: 'Excel',
            exportOptions: {
                columns: [1, 2, 3, 4, 5, 6]
            }
        },
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Lista de Empleado',
            filename: 'Lista de Empleado',
            text: 'Pdf',
            orientation: 'landscape',
            pageSize: 'LEGAL',
            exportOptions: {
                columns: [1, 2, 3, 4, 5, 6]
            }
        },
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: 'Imprimir',
            exportOptions: {
                columns: [1, 2, 3, 4, 5, 6]
            }
        },
        ],
        "order": [[1, "asc"]],
        destroy: true,
        "ajax": {
            "url": '/Empleado/GridEmpleado',
            "type": "GET",
            "datatype": "json"
        },
        columns: [
            { "data": "Id", title: "Id", "visible": false },
            { "data": "Nombre", title: "Empleado" },
            { "data": "TipoDocumento", title: "Documento" },
            { "data": "Identificacion", title: "Identificación" },            
            { "data": "Estado", title: "Estado" },
            { "data": "CreateBy", title: "Creado por" },
            { "data": "DateCreate", title: "Fecha Creación", "autoWidth": false },
            {
                title: "Hoja Vida",
                data: null,
                defaultContent: '<a href="#" class="HojaVidaEmpleado" title="Ver hoja de vida"><i class="bi-file-earmark-medical-fill" style="Color:blue"></i></a>', 
                className: '',
                orderable: false,
                "autoWidth": false,
            },
            //{
            //    title: "Inf. Personal",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosPersonalesEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            //{
            //    title: "Inf. Laboral",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosFamiliaresEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            //{
            //    title: "Inf. Familiar",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosFamiliaresEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": true,
            //},
            //{
            //    title: "Inf. Hijos",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatoHijosEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            //{
            //    title: "Ref. Personal",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosPersonalesEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            //{
            //    title: "Ref. Familiar",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosFamiliaresEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            //{
            //    title: "Inf. Educación",
            //    data: null,
            //    defaultContent: '<a href="#" class="DatosFamiliaresEmpleado">Ver</a>',
            //    className: '',
            //    orderable: false,
            //    "autoWidth": false,
            //},
            {
                title: "Editar",
                data: null,
                defaultContent: '<a href="#" class="EditarEmpleado" title="Editar"><i class="bi-pencil-fill" style="Color:green"></i></a>',
                className: '',
                orderable: false,
                "autoWidth": false,
            },
            {
                title: "Eliminar",
                data: null,
                defaultContent: '<a href="#" class="EliminarEmpleado" title="Eliminar"><i class="bi-trash-fill" style="Color:red"></i></a>',
                className: '',
                orderable: false,
                "autoWidth": false,
            },
        ],
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.11.2/i18n/es_es.json"
        },
        lengthMenu: [
            [10, 25, 50, -1],
            ['10 Filas', '25 Filas', '50 Filas', 'Ver Todo']
        ],
    });
    $('#gridEmpleado').on('click', '.EditarEmpleado', function () {
        let data = datatable.row($(this).parents()).data();
        Cookies.set('IdEdit', data.Id);
        window.location = "/Empleado/Editar_Empleado";
    });


    $('#gridEmpleado').on('click', '.EliminarEmpleado', function () {
        let data = datatable.row($(this).parents()).data();
        $('#ModalEliminarEmpleado').modal('show');
        $('#IdEmpleado').text(data.Id);
        $('#MensajeEliminarEmpleado').text('Esta seguro de eliminar la Empleado ' + data.Nombre + ' ?');
    })

    $('#gridEmpleado').on('click', '.HojaVidaEmpleado', function () {
        let data = datatable.row($(this).parents()).data();
        Cookies.set('IdHVEmpleado', data.Id);
       
        window.location = "/Empleado/Hoja_Vida_Empleado";
        $('#LabelNombreEmpleado').text(data.Id);
        $('#LabelTipoDocumento').text(data.TipoDocumento);
        $('#LabelDocumentoIdentificacion').text(data.Identificacion);
    });
}

function ListaEmpleado(Tipo) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Empleado/ListaEmpleado',
        data: {},
        success: function (resultado) {
            var contador = 0;
            if (Tipo == "N") {
                if (resultado.length === 0) {
                    $("#SelectEmpleado").append('<option value="">No hay Datos</option>');
                } else {
                    $("#SelectEmpleado").empty().append('<option value="-1">Seleccione Empleado</option>');
                    $.each(resultado, function () {
                        $("#SelectEmpleado").append('<option value="' + resultado[contador].Id + '">' + resultado[contador].Nombre + '</option>');
                        contador++;
                    });
                }
            } else {
                $.each(resultado, function () {
                    $("#SelectEEmpleado").append('<option value="' + resultado[contador].Id + '">' + resultado[contador].Nombre + '</option>');
                    contador++;
                });
            }
        },
    });
}