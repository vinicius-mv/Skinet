using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type, string? sort);

    Task<IReadOnlyList<string>> GetBrandsAsync();

    Task<IReadOnlyList<string>> GetTypesAsync();
}