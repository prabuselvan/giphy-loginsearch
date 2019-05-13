const Actions = {
    ONSEARCH: 'ONSEARCH',
    onSearch : (payload)=> ({ type : Actions.ONSEARCH, payload}),
    ONSEARCHUPDATE: 'ONSEARCHUPDATE',
    onSearchUpdate: (payload)=> ({type: Actions.ONSEARCHUPDATE, payload}),
    ONPAGELOAD: 'ONPAGELOAD',
    onPageLoad: (payload)=> ( { type: Actions.ONPAGELOAD, payload}),
    ONPAGELOADUPDATE: 'ONPAGELOADUPDATE',
    onPageLoadUpdate :  (payload)=> ({ type : Actions.ONPAGELOADUPDATE, payload}),
    ONLOADING: 'ONLOADING',
    onLoading: (payload)=> ({type:  Actions.ONLOADING, payload}),
    ONLOADINGUPDATE: 'ONLOADINGUPDATE',
    onLoadingUpdate: (payload)=> ({type : Actions.ONLOADINGUPDATE, payload})
};

export default Actions;