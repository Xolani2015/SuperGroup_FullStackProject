using Microsoft.AspNetCore.Mvc;
using SuperGroupAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace SuperGroupAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ShopController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("ProductList")]
        public Response GetAllProducts()
        {
            List<Products> productList = new List<Products>();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SuperGroupCon").ToString());
            SqlDataAdapter adapter = new SqlDataAdapter("SELECT*From tblProducts;", connection);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            Response response = new Response();
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Products product = new Products();
                    product.Id = Convert.ToInt32(dt.Rows[i]["id"]);
                    product.Name = Convert.ToString(dt.Rows[i]["Name"]);
                    product.Image = Convert.ToString(dt.Rows[i]["Image"]);
                    product.ActualPrice = Convert.ToDecimal(dt.Rows[i]["ActualPrice"]);
                    product.DiscountedPrice = Convert.ToDecimal(dt.Rows[i]["DiscountedPrice"]);
                    productList.Add(product);
                }
                if (productList.Count > 0)
                {
                    // response.StatusCode = 200;
                    // response.StatusMessage = "Success Retreving products";
                    response.productList = productList;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "No products Available";
                    response.productList = null;
                }
            }
            else
            {
                response.StatusCode = -1;
                response.StatusMessage = "Error Occured";
                response.productList = null;
            }
            return response;
        }

        [HttpPost]
        [Route("Checkout")]
        public Response Checkout(List<Products> products)
        {
            Response response = new Response();
            if (products.Count != 0)
            {


                
               // SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SuperGroupCon").ToString());
                if (products != null)
                {
                    // Get today's date
                    DateTime today = DateTime.Today;

                    // Format the date as "dd-MM-yyyy"
                    string date = today.ToString("dd-MM-yyyy");

                    int numOfProducts = products.Count;

                    // Get Total amount of cart selected elements
                    decimal totalAmount = 0;

                    // Loop through all the products to get the price of each product 
                    for (int x = 0; x < numOfProducts; x++)
                    {
                        totalAmount += products[x].ActualPrice;
                    }

                    bool Active = true;



                    //   SqlCommand cmd = new SqlCommand("INSERT INTO tblOrders (numProducts, totalAmount, date, active) VALUES ('" + numOfProducts + ", " + totalAmount + "," + date + ", " + Active + "')", connection);
                    //    connection.Open();
                    //   int i = cmd.ExecuteNonQuery();
                    //   connection.Close();
                    //   if (i > 0)
                    //   {


                    //   }
                    //   else
                    //   {
                    //       response.StatusCode = -1;
                    //       response.StatusMessage = "Error Occured";
                    //   }
                    // }
                    // else
                    // {
                    //   response.StatusCode = -1;
                    //     response.StatusMessage = "Error Occured";

               
                        string query = "INSERT INTO tblOrders (numProducts, totalAmount, date, active) " +
                                       "VALUES (@NumProducts, @TotalAmount, @Date, @Active)";

                        using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SuperGroupCon").ToString()))
                        using (SqlCommand command = new SqlCommand(query, connection))
                        {
                            command.Parameters.Add("@NumProducts", SqlDbType.Int).Value = numOfProducts;
                            command.Parameters.Add("@TotalAmount", SqlDbType.Decimal).Value = totalAmount;
                            command.Parameters.Add("@Date", SqlDbType.VarChar, 100).Value = date;
                            command.Parameters.Add("@Active", SqlDbType.Bit).Value = Active;

                            try
                            {
                                connection.Open();
                                int rowsAffected = command.ExecuteNonQuery();

                                if (rowsAffected > 0)
                                {
                                    // Data inserted successfully
                                    response.StatusCode = 200;
                                    response.StatusMessage = "Order Submitted";
                            }
                            else
                                {
                                    // No rows were affected, data insertion might have failed
                             
                                    response.StatusCode = -1;
                                    response.StatusMessage = "Data insertion failed!";
                            }
                            }
                            catch (Exception ex)
                            {
                                Console.WriteLine("An error occurred: " + ex.Message);

                            response.StatusCode = -1;
                            response.StatusMessage = "Data insertion failed!";
                        }
                        }
                    }

                




            }
            return response;

        }

        }




    }

