(function(module) {

    let html = module.html;
    let template = function() {
        return html`        
            <tr>
                <th>Locations</th>
                <th>6am</th>
                <th>7am</th>
                <th>9am</th>
                <th>10am</th>
                <th>11am</th>
                <th>12pm</th>
                <th>1pm</th>
                <th>2pm</th>
                <th>3pm</th>
                <th>4pm</th>
                <th>5pm</th>
                <th>6pm</th>
                <th>7pm</th>
                <th>Location Totals</th>
            </tr>
        `;
    };

    class TableRow {
        // constructor(props) {
        //     this.store = props.store;
        //     this.onRemove = props.onRemove;
        // }

        render() {
            let dom = template();


            return dom;
        }
    }

    module.TableRow = TableRow;

})(window.module = window.module || {});