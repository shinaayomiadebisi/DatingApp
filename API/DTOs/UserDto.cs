namespace API.DTOs
{
  public record UserDto
  {
    public string Username { get; set; }
    public string Token { get; set; }
  }
}