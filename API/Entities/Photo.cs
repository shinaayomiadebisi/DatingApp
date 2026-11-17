namespace API.Entities
{
  public class Photo
  {
    public int id { get; set; }
    public string Url { get; set; }
    public bool IsMain { get; set; }
    public string PublicId { get; set; }
  }
}