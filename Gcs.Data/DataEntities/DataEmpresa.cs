﻿using Gcs.Data.DataContext;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Gcs.Models.Models.Empresa;

namespace Gcs.Data.DataEntities
{
    public class DataEmpresa
    {
        readonly GCS_DBEntities _conection = new GCS_DBEntities();
        private readonly DataRol dataRol = new DataRol();

        public string CrearEmpresa(string IdUser, string NombreEmpresa, int IdTipoDocumento, string Identificacion, string Email, string Telefono, string Contacto, int IdCiudad, string Direccion)
        {
            string resultado = String.Empty;
            try
            {
                var varIdUser = new SqlParameter("@IdUser", SqlDbType.VarChar) { Value = IdUser };
                var varNombreEmpresa = new SqlParameter("@NombreEmpresa", SqlDbType.VarChar) { Value = NombreEmpresa };
                var varIdTipoDocumento = new SqlParameter("@IdTipoDocumento", SqlDbType.Int) { Value = IdTipoDocumento };
                var varIdentificacion = new SqlParameter("@Identificacion", SqlDbType.VarChar) { Value = Identificacion };
                var varEmail = new SqlParameter("@Email", SqlDbType.VarChar) { Value = Email };
                var varTelefono = new SqlParameter("@Telefono", SqlDbType.VarChar) { Value = Telefono };
                var varContacto = new SqlParameter("@Contacto", SqlDbType.VarChar) { Value = Contacto };
                var varIdCiudad = new SqlParameter("@IdCiudad", SqlDbType.Int) { Value = IdCiudad };
                var varDireccion = new SqlParameter("@Direccion", SqlDbType.VarChar) { Value = Direccion };
                var varResultado = new SqlParameter("@Resultado", SqlDbType.VarChar) { Direction = ParameterDirection.Output, Size = 255 };

                _conection.Database.ExecuteSqlCommand("SP_CrearEmpresa @IdUser, @NombreEmpresa, @IdTipoDocumento, @Identificacion, @Email, @Telefono, @Contacto, @IdCiudad, @Direccion, @Resultado OUTPUT", varIdUser, varNombreEmpresa, varIdTipoDocumento, varIdentificacion, varEmail, varTelefono, varContacto, varIdCiudad, varDireccion, varResultado);

                resultado = Convert.ToString(varResultado.Value);
            }
            catch (Exception ex)
            {
                var Rol = dataRol.BuscarRolUsuario(IdUser);
                if (Rol == "Administrador")
                {
                    resultado = "Error*" + ex.Message;
                }
                else
                {
                    if (ex.Message.Contains("No se puede insertar"))
                    {
                        resultado = "Error*No se puede insertar valores duplicados, la empresa " + NombreEmpresa + " ya Existe";
                    }
                    else
                    {
                        resultado = "Error*En el momento no se puede realizar este proceso, por favor comuniquese con el Administrador";
                    }
                }
            }
            return resultado;
        }












        public List<GridEmpresa> GridEmpresa()
        {
            try
            {
                var response = _conection.Database.SqlQuery<GridEmpresa>("SP_GridEmpresa").ToList();
                return response;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
