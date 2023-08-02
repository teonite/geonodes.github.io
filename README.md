# Geonodes frontend

## Installing dependencies

Make sure you are using Node version from `.nvmrc` file and have `pnpm` installed.

```bash
pnpm install
```

## Building static

After installing dependencies use:

```bash
pnpm build
```

## Development server

```bash
pnpm dev
```

## Linting with eslint and prettier

```bash
pnpm lint
```

## Fix autofixable errors with eslint and prettier

```bash
pnpm fix
```

## Deployment

Deployment is done via github actions, checkout `.github` directory for further information.


## Configurations

### nft-config.json

`"NETWORK":` - what network is the contract deployed on (currently works only "ethereum")

`"CONTRACT_ADDRESS"`: contract address (this address sepcifies only the contract from which the tokenURI's will be read)

#### Metadata configuration
`"NAME":` under whaich label, the metadata stores the name of the NFT, usually "name"

`"IMAGE":` under whaich label, the metadata stores the image of the NFT, usually "image"

`"ANIMATION":` under whaich label, the metadata stores the animation url of the NFT, usually "animation_url"

`"ATTRRIBUTES":` under whaich label, the metadata stores the attributes of the NFT, usually "attributes"

`"ATTRIBUTE_1/2/3":` The three attributes which values will be displayed on the info panel (under the nft media ex. collection page)

`"ATTRIBUTE_NAME":` what is the name of the attribute ex. "Ambient"

`"ATTRIBUTE_TYPE":` what is the type of attribute ex. "string" or "number"

`"ITEMS_PER_PAGE":` how many items should be displayed on one collection-page (recommended 6)

### contract-cache.json

 must be specified two objects "abi" and "bytecode".

 Ex.

 ```
 {
  "contractName": "TeoniteGeonodes",
  "sourceName": "contracts/TeoniteGeonodes.sol",
  "abi": [ 
    ...
  ],
  "bytecode": ...
 }
 ```