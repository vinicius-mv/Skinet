using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type);

    Task<IReadOnlyList<Product>> GetProductsAsync();

    Task<Product?> GetProductByIdAsync(int id);

    Task<IReadOnlyList<string>> GetBrandsAsync();

    Task<IReadOnlyList<string>> GetTypesAsync();

    void AddProduct(Product product);

    void UpdateProduct(Product product);

    void DeleteProduct(Product product);

    Task<bool> ProductExists(int id);

    Task<bool> SaveChangesAsync();
}