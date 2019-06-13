export default (data) => {
    return {
      id: data.id,
      title: data.localizedTitle,
      price: data.price ? data.price.pretty : {},
      bedrooms: data.sizes ? data.sizes.bedrooms : {},
      bathrooms: data.sizes ? data.sizes.bathrooms : {},
      floorArea: data.sizes ? data.sizes.floorArea[0] : {},
      landArea: data.sizes ? data.sizes.landArea[0] : {},
      floorAreaPricePerSq: data.pricePerArea ? data.pricePerArea.floorArea[0] : {},
      landAreaPricePerSq: data.pricePerArea ? data.pricePerArea.landArea[0] : {},
      urls: data.urls,
      date: data.dates,
      showAgentProfile: data.showAgentProfile,
      agent: data.agent,
      agency: data.agency,
      location: data.location,
      property: data.property,
      media: data.media,
      isFeaturedListing: data.isFeaturedListing,
    };
  };
