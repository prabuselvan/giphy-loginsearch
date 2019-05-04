const Actions = {
    ONSEARCH: 'ONSEARCH',
    onSearch : (payload)=> ({ type : Actions.ONSEARCH, payload}),
    ONSEARCHUPDATE: 'ONSEARCHUPDATE',
    onSearchUpdate: (payload)=> ({type: Actions.ONSEARCHUPDATE, payload}),
    ONPAGELOAD: 'ONPAGELOAD',
    onPageLoad: (payload)=> ( { type: Actions.ONPAGELOAD, payload}),
    ONPAGELOADUPDATE: 'ONPAGELOADUPDATE',
    onPageLoadUpdate :  (payload)=> ({ type : Actions.ONPAGELOADUPDATE, payload})

};

export default Actions;