using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Config;

public class ProductConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Product> builder)
    {
        builder.Property(x => x.Price).HasColumnType("decimal(18,2)");
        builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
        builder.Property(x => x.Brand).IsRequired().HasMaxLength(50);
        builder.Property(x => x.Description).IsRequired().HasMaxLength(255);
        builder.Property(x => x.PictureUrl).IsRequired().HasMaxLength(255);
        builder.Property(x => x.Type).IsRequired().HasMaxLength(50);
    }
}