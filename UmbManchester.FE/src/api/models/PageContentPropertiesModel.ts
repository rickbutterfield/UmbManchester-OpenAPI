/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiBlockGridModel } from './ApiBlockGridModel';
import type { IApiMediaWithCropsModel } from './IApiMediaWithCropsModel';
import type { RichTextModel } from './RichTextModel';
export type PageContentPropertiesModel = {
    pageTitle?: string | null;
    pageContentRte?: RichTextModel;
    pageGrid?: ApiBlockGridModel;
    featuredImage?: Array<IApiMediaWithCropsModel> | null;
};

