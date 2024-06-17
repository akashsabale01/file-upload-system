using Microsoft.EntityFrameworkCore;

namespace FileUploadSytemApi.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Models.Entities.File> Files { get; set; }
    }
}
