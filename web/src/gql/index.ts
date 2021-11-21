/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\r\n  query BlogPaths {\r\n    posts {\r\n      slug\r\n    }\r\n  }\r\n": graphql.BlogPathsDocument,
    "\r\n  query Blog($slug: String!) {\r\n    posts(where: { slug: $slug }) {\r\n      title\r\n      slug\r\n      description\r\n      updated_at\r\n      topics\r\n      author {\r\n        name\r\n        bio\r\n        avatar {\r\n          formats\r\n        }\r\n      }\r\n      playlist {\r\n        posts {\r\n          updated_at\r\n          title\r\n          slug\r\n          description\r\n          topics\r\n        }\r\n      }\r\n    }\r\n  }\r\n": graphql.BlogDocument,
    "\r\n  query HomePage {\r\n    homepage {\r\n      creditText\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n          height\r\n          width\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n          height\r\n          width\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n    posts(sort: \"updated_at:desc\", limit: 3) {\r\n      updated_at\r\n      title\r\n      slug\r\n      description\r\n      topics\r\n    }\r\n  }\r\n": graphql.HomePageDocument,
    "\r\n  query PlaylistPaths {\r\n    playlists {\r\n      slug\r\n    }\r\n  }\r\n": graphql.PlaylistPathsDocument,
    "\r\n  query Playlist($slug: String!) {\r\n    playlists(where: { slug: $slug }) {\r\n      title\r\n      description\r\n      slug\r\n      posts(sort: \"updated_at:desc\") {\r\n        id\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n": graphql.PlaylistDocument,
    "\r\n  query Playlists {\r\n    playlists {\r\n      title\r\n      description\r\n      id\r\n      slug\r\n      posts(sort: \"updated_at:desc\", limit: 3) {\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n": graphql.PlaylistsDocument,
};

export function gql(source: "\r\n  query BlogPaths {\r\n    posts {\r\n      slug\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query BlogPaths {\r\n    posts {\r\n      slug\r\n    }\r\n  }\r\n"];
export function gql(source: "\r\n  query Blog($slug: String!) {\r\n    posts(where: { slug: $slug }) {\r\n      title\r\n      slug\r\n      description\r\n      updated_at\r\n      topics\r\n      author {\r\n        name\r\n        bio\r\n        avatar {\r\n          formats\r\n        }\r\n      }\r\n      playlist {\r\n        posts {\r\n          updated_at\r\n          title\r\n          slug\r\n          description\r\n          topics\r\n        }\r\n      }\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query Blog($slug: String!) {\r\n    posts(where: { slug: $slug }) {\r\n      title\r\n      slug\r\n      description\r\n      updated_at\r\n      topics\r\n      author {\r\n        name\r\n        bio\r\n        avatar {\r\n          formats\r\n        }\r\n      }\r\n      playlist {\r\n        posts {\r\n          updated_at\r\n          title\r\n          slug\r\n          description\r\n          topics\r\n        }\r\n      }\r\n    }\r\n  }\r\n"];
export function gql(source: "\r\n  query HomePage {\r\n    homepage {\r\n      creditText\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n          height\r\n          width\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n          height\r\n          width\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n    posts(sort: \"updated_at:desc\", limit: 3) {\r\n      updated_at\r\n      title\r\n      slug\r\n      description\r\n      topics\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query HomePage {\r\n    homepage {\r\n      creditText\r\n      Hero {\r\n        title\r\n        navlinks\r\n        profile {\r\n          url\r\n          height\r\n          width\r\n        }\r\n      }\r\n      About {\r\n        work\r\n        blogs\r\n        watch\r\n        email\r\n      }\r\n      Project {\r\n        title\r\n        description\r\n        tools\r\n        image {\r\n          url\r\n          height\r\n          width\r\n        }\r\n        url\r\n        bg {\r\n          url\r\n        }\r\n      }\r\n      Contact {\r\n        email\r\n        insta\r\n        linkedin\r\n        twitter\r\n        youtube\r\n        title\r\n      }\r\n    }\r\n    posts(sort: \"updated_at:desc\", limit: 3) {\r\n      updated_at\r\n      title\r\n      slug\r\n      description\r\n      topics\r\n    }\r\n  }\r\n"];
export function gql(source: "\r\n  query PlaylistPaths {\r\n    playlists {\r\n      slug\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query PlaylistPaths {\r\n    playlists {\r\n      slug\r\n    }\r\n  }\r\n"];
export function gql(source: "\r\n  query Playlist($slug: String!) {\r\n    playlists(where: { slug: $slug }) {\r\n      title\r\n      description\r\n      slug\r\n      posts(sort: \"updated_at:desc\") {\r\n        id\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query Playlist($slug: String!) {\r\n    playlists(where: { slug: $slug }) {\r\n      title\r\n      description\r\n      slug\r\n      posts(sort: \"updated_at:desc\") {\r\n        id\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n"];
export function gql(source: "\r\n  query Playlists {\r\n    playlists {\r\n      title\r\n      description\r\n      id\r\n      slug\r\n      posts(sort: \"updated_at:desc\", limit: 3) {\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n"): (typeof documents)["\r\n  query Playlists {\r\n    playlists {\r\n      title\r\n      description\r\n      id\r\n      slug\r\n      posts(sort: \"updated_at:desc\", limit: 3) {\r\n        updated_at\r\n        title\r\n        slug\r\n        description\r\n        topics\r\n      }\r\n    }\r\n  }\r\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;