import { Vue } from 'vue-property-decorator'
declare type RequestType = {
    file: File;
}
declare enum UploadState {
    STANDBY = 0,
    SENDING = 1,
    SUCCESS = 2,
    ERROR = 3,
}
export default class ImageUploader extends Vue {
    get isSending(): boolean;
    get isSuccess(): boolean;
    get isError(): boolean;
    public url: string
    public hideStatus: boolean
    public imageUrl: string
    public isNotAllowFileType: boolean
    public isOverFileSize: boolean
    public uploadState: UploadState
    private logger
    public toStandby(): void
    public setUrl(): void
    public uploadToFilesbaseStorage(request: RequestType): Promise<void>
    public beforeAvatarUpload(file: File): boolean
    public understand(): void
}
export {}
