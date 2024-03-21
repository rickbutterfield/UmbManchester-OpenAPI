# UmbManchester-OpenAPI
Supporting code for my talk 'Generating a TypeScript OpenAPI client from Umbraco's Content Delivery API'.

## UmbManchester.BE
The backend project is a Umbraco 13 with uSync and the Content Delivery API enabled. The uSync files will auto import on startup using [FirstBoot](https://github.com/KevinJump/uSync/issues/382).

## UmbManchester.FE
The frontend project is Astro 4.5, with `openapi-typescript-codegen` set up to generate strongly typed TypeScript models to connect to the Content Delivery API.