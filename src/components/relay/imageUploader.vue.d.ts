import { Vue } from 'vue-property-decorator';
declare type RequestType = {
    file: File;
};
declare enum UploadState {
    STANDBY = 0,
    SENDING = 1,
    SUCCESS = 2,
    ERROR = 3
}
export default class ImageUploader extends Vue {
    get isSending(): boolean;
    get isSuccess(): boolean;
    get isError(): boolean;
    url: string;
    hideStatus: boolean;
    imageUrl: string;
    isNotAllowFileType: boolean;
    isOverFileSize: boolean;
    uploadState: UploadState;
    private logger;
    toStandby(): void;
    setUrl(): void;
    uploadToFilesbaseStorage(request: RequestType): Promise<void>;
    beforeAvatarUpload(file: File): boolean;
    understand(): void;
}
export {};
