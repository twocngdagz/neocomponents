module.exports = {
    showAll: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: "Search for...",
    },
    totalTableRows: {
        type: Number,
        default: 0,
    },
    realTime: {
        type: Boolean,
        default: true,
    },
    searchedKeyword: {
        type: String,
        default: null,
    },
    isAsc: {
        type: Boolean,
        default: true,
    },
    sortedColumn: {
        type: String,
        default: null,
    },
    page: {
        type: Number,
        default: 1,
    },
    limit: {
        type: Number,
        default: 15,
    },
    enableSearch: {
        type: Boolean,
        default: true,
    },
    multipleRows: {
        type: Boolean,
        default: true,
    },
    exludeColumns: {
        type: Array,
        default: () => [],
    },
    loadingMessage: {
        type: String,
        default: "Loading...",
    },
    emptyMessage: {
        type: String,
        default: "No data available.",
    },
    columns: {
        type: Array,
        default: () => [],
    },
    data: {
        type: Array,
        default: () => [],
    },
    freezeColumn: {
        type: Number,
        default: 0,
    },
    maxHeight: {
        type: String,
        default: null,
    },
    enableDataFilter: {
        type: Boolean,
        default: true,
    },
    enableDataSorting: {
        type: Boolean,
        default: true,
    },
    enableDataPagination: {
        type: Boolean,
        default: true,
    },
};
