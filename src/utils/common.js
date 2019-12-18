export const formatterMenus = (data, parentPath = '/', parentAuthority) => {
    return data.map(item => {
        let { path } = item;
        path = parentPath + item.path;
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatterMenus(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}