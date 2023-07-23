public class RandomNumberGenerator
{
    private static readonly Random random = new Random();

    public static string GenerateRandomSGCODE()
    {
        int randomNumber = random.Next(10000); // Generates a random integer from 0 to 9999
        string random4DigitNumber = randomNumber.ToString("D4"); // Formats the number as "0000" with leading zeros
        return "SGCODE" + random4DigitNumber; // Prefix the random number with "SGCODE"
    }
}