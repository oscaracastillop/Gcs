﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gcs.Models.Models
{
    public class CajaCompensacionFamiliar
    {
        public class GridCajaCompensacionFamiliar
        {
            public int Id { get; set; }
            public string Nombre { get; set; }
            public string Email { get; set; }
            public string Telefono { get; set; }
            public string Estado { get; set; }
            public string CreateBy { get; set; }
            public string DateCreate { get; set; }
        }

        public class ListaCajaCompensacionFamiliar
        {
            public int Id { get; set; }
            public string Nombre { get; set; }
        }

        public class CargarDatosCajaCompensacionFamiliar
        {
            public string Nombre { get; set; }
            public string Email { get; set; }
            public string Telefono { get; set; }
            public int Activo { get; set; }
        }
    }
}
