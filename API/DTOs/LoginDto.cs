namespace API.DTOs
{
  public record LoginDto
  {
    public string Username { get; set; }
    public string Password { get; set; }

  }
}