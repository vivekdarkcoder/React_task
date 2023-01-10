export const modifiProduct = (products, colors, material) => {
    const modifiedProduts = products.map((product) => {
        const color = colors.find((color) => color.id === product.colorId);
        const materials = material.find((material) => material.id === product.materialId);
        return { ...product, colorId: color?.name || 'white', materialId: materials?.name || 'cotton' };
    });
    
    return modifiedProduts;
};