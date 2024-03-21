/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IApiContentResponseModel } from '../models/IApiContentResponseModel';
import type { PagedIApiContentResponseModel } from '../models/PagedIApiContentResponseModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContentResource {
    /**
     * @deprecated
     * @returns PagedIApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContent({
        fetch,
        filter,
        sort,
        skip,
        take = 10,
        expand,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        /**
         * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string,
        /**
         * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>,
        /**
         * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>,
        /**
         * Specifies the number of found content items to skip. Use this to control pagination of the response.
         */
        skip?: number,
        /**
         * Specifies the number of found content items to take. Use this to control pagination of the response.
         */
        take?: number,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<PagedIApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/content',
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns PagedIApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContent20({
        fetch,
        filter,
        sort,
        skip,
        take = 10,
        expand,
        fields,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        /**
         * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fetch?: string,
        /**
         * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        filter?: Array<string>,
        /**
         * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        sort?: Array<string>,
        /**
         * Specifies the number of found content items to skip. Use this to control pagination of the response.
         */
        skip?: number,
        /**
         * Specifies the number of found content items to take. Use this to control pagination of the response.
         */
        take?: number,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<PagedIApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/content',
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItem({
        id,
        expand,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        id?: Array<string>,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<Array<IApiContentResponseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/content/item',
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'id': id,
                'expand': expand,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItemByPath({
        path = '',
        expand,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        path?: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<IApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/content/item/{path}',
            path: {
                'path': path,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'expand': expand,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItemByPath20({
        path = '',
        expand,
        fields,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        path?: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<IApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/content/item/{path}',
            path: {
                'path': path,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'expand': expand,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @deprecated
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItemById({
        id,
        expand,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        id: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<IApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v1/content/item/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'expand': expand,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItemById20({
        id,
        expand,
        fields,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        id: string,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<IApiContentResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/content/item/{id}',
            path: {
                'id': id,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'expand': expand,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * @returns IApiContentResponseModel Success
     * @throws ApiError
     */
    public static getContentItems20({
        id,
        expand,
        fields,
        acceptLanguage,
        apiKey,
        preview,
        startItem,
    }: {
        id?: Array<string>,
        /**
         * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        expand?: string,
        /**
         * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
         */
        fields?: string,
        /**
         * Defines the language to return. Use this when querying language variant content items.
         */
        acceptLanguage?: string,
        /**
         * API key specified through configuration to authorize access to the API.
         */
        apiKey?: string,
        /**
         * Whether to request draft content.
         */
        preview?: boolean,
        /**
         * URL segment or GUID of a root content item.
         */
        startItem?: string,
    }): CancelablePromise<Array<IApiContentResponseModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/umbraco/delivery/api/v2/content/items',
            headers: {
                'Accept-Language': acceptLanguage,
                'Api-Key': apiKey,
                'Preview': preview,
                'Start-Item': startItem,
            },
            query: {
                'id': id,
                'expand': expand,
                'fields': fields,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
