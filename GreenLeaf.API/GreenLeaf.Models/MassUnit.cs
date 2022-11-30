using System;

namespace GreenLeaf.Models
{
    public class MassUnit
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Abbreviation { get; set; }
        public string DisplayText => $"{Description} ({Abbreviation})";
    }
}
