using FileUploadSytemApi.Data;
using Microsoft.AspNetCore.Mvc;

namespace FileUploadSytemApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly DatabaseContext databaseContext;

        public FilesController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> UploadFile([FromForm] IFormFile uploadedFile)
        {
            if (uploadedFile == null || uploadedFile.Length == 0)
                return BadRequest("No file uploaded");

            using (var memoryStream = new MemoryStream())
            {
                await uploadedFile.CopyToAsync(memoryStream);
                var file = new Models.Entities.File
                {
                    FileName = uploadedFile.FileName,
                    FileData = memoryStream.ToArray(),
                };

                databaseContext.Files.Add(file);
                await databaseContext.SaveChangesAsync();

                return Ok(file);
            }
        }

        [HttpGet]
        public IActionResult GetAllFiles()
        {
            return Ok(databaseContext.Files.ToList());
        }
    }
}
