using GreenLeaf.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenLeaf.DataAccess.Mappings
{
    class ProductMap : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(c => c.Id);
            builder.Property(c => c.Name).HasMaxLength(80);
            builder.Property(c => c.Description).HasMaxLength(500);
            builder.HasOne(c => c.Unit).WithMany().HasForeignKey(u => u.IdUnit);
            builder.HasOne(c => c.Category).WithMany().HasForeignKey(u => u.IdCategory);
        }   
    }
}
