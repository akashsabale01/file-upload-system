namespace FileUploadSytemApi.Models.Entities
{
    public class File
    {
        public Guid Id { get; set; }

        public string FileName { get; set; }

        public byte[] FileData { get; set; }
    }
}
