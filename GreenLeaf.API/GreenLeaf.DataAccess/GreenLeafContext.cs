using GreenLeaf.DataAccess.Mappings;
using GreenLeaf.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace GreenLeaf.DataAccess
{
    public class GreenLeafContext: DbContext
    {
        public GreenLeafContext(DbContextOptions<GreenLeafContext> options): base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<MassUnit> MassUnits { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductMap());
            base.OnModelCreating(modelBuilder);
        }

    }
}
