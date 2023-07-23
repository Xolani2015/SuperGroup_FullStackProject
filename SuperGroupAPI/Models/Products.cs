namespace SuperGroupAPI.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public decimal ActualPrice { get; set; }
        public decimal DiscountedPrice { get; set; }
        public string Category { get; set; }

    }
}
