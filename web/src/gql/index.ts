/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\r\n  query HomePage {\r\n    homepage {\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n  }\r\n": graphql.HomePageDocument,
};

export function gql(source: "\r\n  query HomePage {\r\n    homepage {\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query HomePage {\r\n    homepage {\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n  }\r\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;