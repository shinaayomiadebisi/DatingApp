using System;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{
  public static async Task SeedUsers(DataContext context)
  {
    if(await context.Users.AnyAsync()) return;

    var userData = System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
  }
}
