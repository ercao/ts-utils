import downloadFile from 'js-file-download';
import { base64ToBlob } from 'file64';
import defu from 'defu';

export * from 'file64';

export { filesize } from 'filesize';

export const DEFAULT_CONTENT_TYPE = 'application/octet-stream';

/**
 * 下载 base64 文件
 */
export const downloadFileFromBase64 = async (base64: string, fileName: string, _options?: { contentType?: string }) => {
  const options = defu(_options, {
    contentType: DEFAULT_CONTENT_TYPE,
  });

  const blobData = await base64ToBlob(`data:${options.contentType};base64,${base64}`);
  downloadFile(blobData, fileName);
};

/**
 * 下载 blob 文件
 */
export const downloadFileFromBlob = async (_blob, fileName: string, _options?: { contentType?: string }) => {
  const options = defu(_options, {
    contentType: DEFAULT_CONTENT_TYPE,
  });

  const blob = new Blob([_blob], { type: options.contentType });
  downloadFile(blob, fileName);
};
