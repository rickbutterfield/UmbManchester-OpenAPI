/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IApiMediaWithCropsResponseModel } from '../models/IApiMediaWithCropsResponseModel';
import type { PagedIApiMediaWithCropsResponseModel } from '../models/PagedIApiMediaWithCropsResponseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MediaResource {
    /**
     * @deprecated
     * @returns PagedIApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMedia({
        fetch,
        filter,
        sort,
        skip,
        take = 10,
        expand,
        apiKey,
    }: {
        /**
         * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string,
        /**
         * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>,
        /**
         * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>,
        /**
         * Specifies the number of found media items to skip. Use this to control pagination of the response.
         */
        skip?: number,
        /**
         * Specifies the number of found media items to take. Use this to control pagination of the response.
         */
        take?: number,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<PagedIApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/media',
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'fetch': fetch,
                'filter': filter,
                'sort': sort,
                'skip': skip,
                'take': take,
                'expand': expand,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @returns PagedIApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMedia20({
        fetch,
        filter,
        sort,
        skip,
        take = 10,
        expand,
        fields,
        apiKey,
    }: {
        /**
         * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string,
        /**
         * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>,
        /**
         * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>,
        /**
         * Specifies the number of found media items to skip. Use this to control pagination of the response.
         */
        skip?: number,
        /**
         * Specifies the number of found media items to take. Use this to control pagination of the response.
         */
        take?: number,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<PagedIApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/media',
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'fetch': fetch,
                'filter': filter,
                'sort': sort,
                'skip': skip,
                'take': take,
                'expand': expand,
                'fields': fields,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItem({
        id,
        expand,
        apiKey,
    }: {
        id?: Array<string>,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<Array<IApiMediaWithCropsResponseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/media/item',
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'id': id,
                'expand': expand,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItemByPath({
        path,
        expand,
        apiKey,
    }: {
        path: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<IApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/media/item/{path}',
            path: {
                'path': path,
            },
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'expand': expand,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItemByPath20({
        path,
        expand,
        fields,
        apiKey,
    }: {
        path: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<IApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/media/item/{path}',
            path: {
                'path': path,
            },
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'expand': expand,
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItemById({
        id,
        expand,
        apiKey,
    }: {
        id: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<IApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/media/item/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'expand': expand,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItemById20({
        id,
        expand,
        fields,
        apiKey,
    }: {
        id: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<IApiMediaWithCropsResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/media/item/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'expand': expand,
                'fields': fields,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiMediaWithCropsResponseModel Success
     * @throws ApiError
     */
    public static getMediaItems20({
        id,
        expand,
        fields,
        apiKey,
    }: {
        id?: Array<string>,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
    }): CancelablePromise<Array<IApiMediaWithCropsResponseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/media/items',
            headers: {
                'Api-Key': apiKey,
            },
            query: {
                'id': id,
                'expand': expand,
                'fields': fields,
            },
        });
    }
}
