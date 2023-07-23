namespace SuperGroupAPI.Models
{
    public class Order
    {
        public int Id { get; set; }

        public int numProducts { get; set; }

        public decimal totalAmount { get; set; }

        public string date { get; set; }

        public bool active {  get; set; }

        public string firstProductImage { get; set; }

        public string OrderCode { get; set;}

    }
}
