namespace SuperGroupAPI.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Products> productList {get; set;}
    }
}
