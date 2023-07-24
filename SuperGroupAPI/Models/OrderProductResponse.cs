namespace SuperGroupAPI.Models
{
    public class OrderProductResponse
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<OrderProducts> orderProductList { get; set; }
    }
}
