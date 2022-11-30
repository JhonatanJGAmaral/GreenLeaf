using System;

namespace GreenLeaf.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int IdCategory { get; set; }
        public ProductCategory Category { get; set; }
        public double Price { get; set; }
        public int IdUnit { get; set; }
        public MassUnit Unit { get; set; }
        public double Stock { get; set; }
        public string ImagePath { get; set; }
    }
}
