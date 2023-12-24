declare module 'aliexpress-product-scraper-ts' {
    export function scrape(id: string, options?: Options): Promise<Product>;

    enum filterReviewsBy {
        "OneStar" = 1,
        "TwoStar" = 2,
        "ThreeStar" = 3,
        "FourStar" = 4,
        "FiveStar" = 5,
    }
    
    type Options = {
        reviewsCount?: number;
        filterReviewsBy?: filterReviewsBy
        puppeteerOptions?: {}
    }

    type Product = {
        title: string;
        categoryId: number;
        productId: number;
        quantity: {
            total: number;
            available: number;
        };
        description: string;
        orders: number;
        storeInfo: {
            name: string;
            logo: string;
            companyId: number;
            storeNumber: number;
            isTopRated: boolean;
            hasPayPalAccount: boolean;
            ratingCount: number;
            rating: number;
        }
        ratings: {
            totalStar: number;
            averageStar: number;
            totalStartCount: number;
            fiveStarCount: number;
            fourStarCount: number;  
            threeStarCount: number; 
            twoStarCount: number;   
            oneStarCount: number;
        };
        images: string[];
        reviews: [{
            anonymous: boolean;
            name: string;
            displayName: string;
            gender: string;
            country: string;
            rating: number;
            info: string;
            date: string;
            content: string;
            photos: string[];
            thumbnails: string[];
        }];
        variants: {
            options: [
                {
                id: number;
                name: string;
                values: [{
                    id: number;
                    name: string;
                    displayName: string;
                    image: string;    
                }]
                }
            ]
        }
        prices : [
            {
            skuId: number;
            optionValueIds: number[];
            availableQuantity: number;
            originalPrice: {
                currency: string;
                formatedAmount: string;
                value: number;
            }
            salePrice: {
                currency: string;
                formatedAmount: string;
                value: number;
            }
        }];
        specs: [
            {
                attrValue: string;
                attrName: string;
            }
        ];
        currencyInfo: {
            baseCurrencyCode: string;
            enableTransaction: boolean;
            currencySymbol: string;
            symbolFront: false
            currencyRate: number;
            baseSymbolFront: Boolean;
            currencyCode: string;
            baseCurrencySymbol: string;
            multiCurrency: boolean;
        }
        originalPrice: {
            min : {
                currency: string;
                formatedAmount: string;
                value: number;
            }
            max : {
                currency: string;
                formatedAmount: string;
                value: number;
            }
            salePrice: {
                min: {
                    currency: string;
                    formatedAmount: string;
                    value: number;
                }
                max: {
                    currency: string;
                    formatedAmount: string;
                    value: number;
                }
            }
        }
        shipping: [
            {
                deliveryProviderName: string;
                tracking: string;
                provider: string;
                company: string;
                deliveryInfo: {
                    min: number;
                    max: number;
                }
                shippingInfo: {
                    from: string;
                    fromCode: string;
                    to: string;
                    toCode: string;
                    fees: string;
                    displayAmount: string;
                    displayCurrency: string;
                }
                warehouseType: string;
            }
        ]
    };
    

  }


