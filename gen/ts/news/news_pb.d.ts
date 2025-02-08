// package: news
// file: news/news.proto

import * as jspb from "google-protobuf";

export class UpdateNewsPreferencesRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  clearInterestedsectionsList(): void;
  getInterestedsectionsList(): Array<string>;
  setInterestedsectionsList(value: Array<string>): void;
  addInterestedsections(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNewsPreferencesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNewsPreferencesRequest): UpdateNewsPreferencesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNewsPreferencesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNewsPreferencesRequest;
  static deserializeBinaryFromReader(message: UpdateNewsPreferencesRequest, reader: jspb.BinaryReader): UpdateNewsPreferencesRequest;
}

export namespace UpdateNewsPreferencesRequest {
  export type AsObject = {
    userid: string,
    interestedsectionsList: Array<string>,
  }
}

export class NewsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewsRequest): NewsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsRequest;
  static deserializeBinaryFromReader(message: NewsRequest, reader: jspb.BinaryReader): NewsRequest;
}

export namespace NewsRequest {
  export type AsObject = {
    userid: string,
  }
}

export class NewsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Article>;
  setResultsList(value: Array<Article>): void;
  addResults(value?: Article, index?: number): Article;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewsResponse): NewsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsResponse;
  static deserializeBinaryFromReader(message: NewsResponse, reader: jspb.BinaryReader): NewsResponse;
}

export namespace NewsResponse {
  export type AsObject = {
    resultsList: Array<Article.AsObject>,
  }
}

export class Article extends jspb.Message {
  getSection(): string;
  setSection(value: string): void;

  getSubsection(): string;
  setSubsection(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getAbstract(): string;
  setAbstract(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    section: string,
    subsection: string,
    title: string,
    pb_abstract: string,
    url: string,
    source: string,
  }
}

export class SectionListResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<SectionResponse>;
  setResultsList(value: Array<SectionResponse>): void;
  addResults(value?: SectionResponse, index?: number): SectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SectionListResponse): SectionListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionListResponse;
  static deserializeBinaryFromReader(message: SectionListResponse, reader: jspb.BinaryReader): SectionListResponse;
}

export namespace SectionListResponse {
  export type AsObject = {
    resultsList: Array<SectionResponse.AsObject>,
  }
}

export class SectionResponse extends jspb.Message {
  getSection(): string;
  setSection(value: string): void;

  getDisplayname(): string;
  setDisplayname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SectionResponse): SectionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SectionResponse;
  static deserializeBinaryFromReader(message: SectionResponse, reader: jspb.BinaryReader): SectionResponse;
}

export namespace SectionResponse {
  export type AsObject = {
    section: string,
    displayname: string,
  }
}

export class ListSectionsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSectionsRequest): ListSectionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSectionsRequest;
  static deserializeBinaryFromReader(message: ListSectionsRequest, reader: jspb.BinaryReader): ListSectionsRequest;
}

export namespace ListSectionsRequest {
  export type AsObject = {
    userid: string,
  }
}

