namespace SuperGroupAPI.Models
{
    public class OrderRepsonse
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Order> orderList { get; set; }
    }
}
