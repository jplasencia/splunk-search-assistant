





let command_reference = {
    "stats": {
      "description": "Calculates aggregate statistics over the dataset, such as average, count, and sum. The stats command is a distributable streaming command.",
      "examples": [
        "... | stats count",
        "... | stats avg(_time) as average_time by product",
        "... | stats sum(price) as total by product",
        "... | stats list(product) as products",
        "... | stats values(product) as unique_products"
      ]
    },
    "nomv": {
      "description": "Removes multivalue fields from your search results.",
      "examples": [
        "... | nomv product",
        "... | nomv product, price",
        "... | nomv product, price, quantity"
      ]
    },
    "mvappend": {
      "description": "This function returns a single multivalue result from a list of values.",
      "usage": {
        "description": "The values can be strings, multivalue fields, or single value fields. You can use this function with the eval and where commands, in the WHERE clause of the from command, and as part of evaluation expressions with other commands."
      },
      "examples": [
        "... | eval ipaddresses=mvappend(\"localhost\", srcip)"
      ]
    },
    "mvfind": {
      "description": "Finds the index of a value in a multivalue field.",
      "examples": [
        "... | eval n=mvfind(myfield, \"err\d+\")",
        "... | nomv product, price",
        "... | nomv product, price, quantity"
      ]
    },
    "where": {
      "description": "Filters events based on a specified condition.",
      "examples": [
        "... | where len(host)>2",
        "... | !match(status, \"active|complete\")",
        "... | where sourcetype=access_combined AND status=200"
      ]},
      "search": {
        "description": "Searches for events in your data.",
        "examples": [
            "search sourcetype=access_combined",
            "search sourcetype=access_combined status=200",
            "search sourcetype=access_combined OR status=200"
        ]},

    "if": {
        "description": "Evaluates a condition and returns one of two values based on the result of the evaluation.",
        "examples": [
            "... | eval status=if(status=200, \"OK\", \"Not OK\")",
            "... | eval status=if(status=200, \"OK\", if(status=404, \"Not Found\", \"Error\"))",
            "... | eval status=if(status=200, \"OK\", if(status=404, \"Not Found\", if(status=500, \"Server Error\", \"Error\")))"
    ]},
    "colaesce": {
        "description": "Evaluates a condition and returns one of two values based on the result of the evaluation.",
        "examples": [
            "... | eval status=coalesce(status, 200)",
            "... | eval status=coalesce(status, 200, 404)",
            "... | eval status=coalesce(status, 200, 404, 500)"
    ]},

    "convert": {
      "description": "Converts field values in your events into different formats.",
      "examples": [
        "... | convert ctime(_time)",
        "... | convert num(error_count)",
        "... | convert dur2sec(duration)"
      ]
    },
    "tstats": {
      "description": "Retrieves statistical information from indexed fields in tsidx files.",
      "examples": [
        "| tstats count where index=_internal by sourcetype",
        "| tstats sum(_raw) where index=_internal by sourcetype",
        "| tstats avg(_time) where index=_internal by sourcetype"
      ]
    },
    "timechart": {
      "description": "Generates a time chart visualization of the results of a search.",
      "examples": [
        "... | timechart count by sourcetype",
        "... | timechart avg(duration) by sourcetype",
        "... | timechart sum(bytes) by sourcetype"
      ]
    },
    "top": {
      "description": "Generates a table of the top values of a specified field.",
      "examples": [
        "... | top sourcetype",
        "... | top limit=5 sourcetype",
        "... | top sourcetype by host"
      ]
    },
    "rare": {
      "description": "Generates a table of the rare values of a specified field.",
      "examples": [
        "... | rare sourcetype",
        "... | rare limit=5 sourcetype",
        "... | rare sourcetype by host"
      ]
    },
    "dedup": {
      "description": "Removes duplicate events from your search results.",
      "examples": [
        "... | dedup sourcetype",
        "... | dedup sourcetype, host",
        "... | dedup sourcetype, host, source"
      ]
    },
    "fields": {
      "description": "Displays the fields in the search results.",
      "examples": [
        "... | fields - sourcetype",
        "... | fields + sourcetype",
        "... | fields - _time"
      ]
    },
    "head": {
      "description": "Displays the first 10 events of a search result.",
      "examples": [
        "... | head 10",
        "... | head 100",
        "... | head 1000"
      ]
    },
    "tail": {
      "description": "Displays the last 10 events of a search result.",
      "examples": [
        "... | tail 10",
        "... | tail 100",
        "... | tail 1000"
      ]
    },
    "sort": {
      "description": "Sorts the events in your search results.",
      "examples": [
        "... | sort - _time",
        "... | sort + _time",
        "... | sort - sourcetype"
      ]
    },
    "rename": {
      "description": "Renames fields in your search results.",
      "examples": [
        "... | rename SESSIONID AS \"The session ID\"",
        "... | rename EU* AS EMEA*",
        "... | rename pid AS product_id",
        "... | rename price-a*price-b AS price-a\price-b",
        "... | rename price-a*price-b AS price-a*Newprice-b",
        "... | rename  http\\\\:* AS localhost:*",
        "... | rename _ip AS IPAddress",
        "... | rename usr* AS user*",
        "... | rename count AS \"Count of Events\"",
      ]
    },
    "rex": {
      "description": "Extracts fields from events using regular expressions.",
      "examples": [
        "... | rex field=_raw \"(?<severity>\\d)\"",
        "... | rex field=_raw \"(?<severity>\\d)\" max_match=3",
        "... | rex field=_raw \"(?<severity>\\d)\" max_match=3 offset_field=offset"
      ]
    },
    "eval": {
      "description": "Creates new fields in your search results.",
      "examples": [
        "... | eval new_field=field1 + field2",
        "... | eval new_field=field1 * field2"
      ]

   },
    "where": {
      "description": "Filters events based on a specified condition.",
      "examples": [
        "... | where sourcetype=access_combined",
        "... | where sourcetype=access_combined AND status=200",
        "... | where sourcetype=access_combined OR status=200"
      ]
    },
    "search": {
      "description": "Searches for events in your data.",
      "examples": [
        "search sourcetype=access_combined",
        "search sourcetype=access_combined status=200",
        "search sourcetype=access_combined OR status=200"
      ]
    },
    "table": {
      "description": "Displays the search results in a tabular format.",
      "examples": [
        "... | table sourcetype, host, source",
        "... | table _time, sourcetype, host, source",
        "... | table _time, sourcetype, host, source, status"
      ]
    },
    "append": {
      "description": "Appends the results of a subsearch to the results of the main search.",
      "examples": [
        "... | append [ search sourcetype=access_combined ]",
        "... | append [ search sourcetype=access_combined status=200 ]",
        "... | append [ search sourcetype=access_combined OR status=200 ]"
      ]
    },
    "join": {
      "description": "Joins the results of a subsearch with the results of the main search.",
      "examples": [
        "... | join sourcetype [ search sourcetype= access_combined ]",
        "... | join sourcetype [ search sourcetype= access_combined status=200 ]",
        "... | join sourcetype [ search sourcetype= access_combined OR status=200 ]"
      ]
     },
    "appendpipe": {
      "description": "Appends the results of a command to the results of the main search.",
      "examples": [
        "... | appendpipe [ stats count ]",
        "... | appendpipe [ stats avg(_time) as average_time by product ]",
        "... | appendpipe [ stats sum(price) as total by product ]"
      ]
  },
   "mvexpand": {
      "description": "Expands multivalue fields into separate events.",
      "examples": [
        "... | mvexpand foo",
        "... | mvexpand foo limit=100",
      ]
    },
    "where": {
        "description": "Filters events based on a specified condition.",
        "examples": [
            "... | where sourcetype=access_combined",
            "... | where sourcetype=access_combined AND status=200",
            "... | where sourcetype=access_combined OR status=200",
            "... | where len(host)>2",
        ]
    },
    "untable": {
      "description": "Reverts the effects of the table command.",
      "examples": [
        "... | untable _time, sourcetype, host                           , source",
        "... | untable _time, sourcetype, host, source, status"
      ]
    },
    "eventstats": {
        "description": "Calculates aggregate statistics over the dataset, such as average, count, and sum. The eventstats command is a non-distributable streaming command.",
        "examples": [
            "... | eventstats count",
            "... | eventstats avg(_time) as average_time by product",
            "... | eventstats sum(price) as total by product"
        ]},
    "transaction": {
    "description": "Groups events into transactions based on unique field values.",
    "arguments": [
      [
          "field-list",
          "One or more field names. Events are grouped into transactions based on unique field values."
      ],
      [
          "memcontrol-options",
          "Options to control memory usage for transactions."
      ],
      [
          "name",
          "Specify the stanza name of a transaction configured in transactiontypes.conf."
      ],
      [
          "rendering-options",
          "Options to control multivalue rendering for transactions."
      ],
      [
          "txn_definition-options",
          "Specify transaction definition options to define transactions."
      ]
  ],

      "examples": [
        "... | transaction host",
        "... | transaction host maxspan=5m",
        "... | transaction host maxspan=5m keepevicted=true",
        "... | streamstats window=2 current=t latest(alert_level) AS last earliest(alert_level) AS first | transaction endswith=eval(first!=last) | table _time duration first last alert_level eventcount",
        "sourcetype=access_* | transaction clientip maxspan=5s maxpause=30s",
        "sourcetype=access_* | transaction clientip host maxspan=5s maxpause=30s"
      ]
    },
    "streamstats": {
      "description": "Calculates aggregate statistics over the dataset, such as average, count, and sum. The streamstats command is a non-distributable streaming command.",
      "examples": [
        "... | streamstats count",
        "... | streamstats avg(_time) as average_time by product",
        "... | streamstats sum(price) as total by product"
      ]
    },
    "appendcols": {
      "description": "Appends the results of a subsearch to the results of the main search as additional columns.",
      "examples": [
        "... | appendcols [ search sourcetype=access_combined ]",
        "... | appendcols [ search sourcetype=access_combined status=200 ]",
        "... | appendcols [ search sourcetype=access_combined OR status=200 ]"
      ]
    },
    "fieldsummary": {
      "description": "Generates a summary of the fields in the search results.",
      "examples": [
        "... | fieldsummary",
        `... | fieldsummary <br>| where match(field,\"date\") <br>| table field`
      ]
    },
    "bin": {
      "description": "Buckets the values of a field into a specified time span.",
      "examples": [
        "... | bin _time span=1h",
        "... | bin _time span=1d",
        "... | bin _time span=1w"
      ]
    },
    "coalesce": {
      "description": "Evaluates a condition and returns one of two values based on the result of the evaluation.",
      "examples": [
        "... | eval ip=coalesce(clientip, ipaddress)",
        "... | eval ip=coalesce(clientip, ipaddress, \"203.0.113.255\""
      ]},
    "strftime": {
      "synonyms": ["strptime","ctime","timeformat"],
      "description": "The strftime() method returns a string representing date and time using date, time or datetime object.",
        "examples":  [
            ["%a", "Sun", "Weekday as locale’s abbreviated name."],
            ["%d", "08", "Day of the month as a zero-padded decimal number."],
            ["%-d", "8", "Day of the month as a  decimal number."],
            ["%b", "Sep", "Month as locale’s abbreviated name."],
            ["%m", "09", "Month as a zero-padded decimal number."],
            ["%-m", "9", "Month as a  decimal number."],
            ["%y", "13", "Year without century as a zero-padded decimal number."],
            ["%Y", "2013", "Year with century as a decimal number."],
            ["%H", "07", "Hour (24-hour clock) as a zero-padded decimal number."],
            ["%-H", "7", "Hour (24-hour clock) as a  decimal number. (Platform specific)"],
            ["%I", "07", "Hour (12-hour clock) as a zero-padded decimal number."],
            ["%-I", "7", "Hour (12-hour clock) as a  decimal number. (Platform specific)"],
            ["%p", "AM", "Locale’s equivalent of either AM or PM."],
            ["%M", "06", "Minute as a zero-padded decimal number."],
            ["%-M", "6", "Minute as a  decimal number. (Platform specific)"],
            ["%S", "05", "Second as a zero-padded decimal number."],
            ["%-S", "5", "Second as a  decimal number. (Platform specific)"],
            ["%j", "251", "Day of the year as a zero-padded decimal number."],
            ["%U", "36", "Week number of the year (Sunday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0."],
            ["%-U", "36", "Week number of the year (Sunday as the first day of the week) as a  decimal number. All days in a new year preceding the first Sunday are considered to be in week 0. (Platform specific)"],
            ["%W", "35", "Week number of the year (Monday as the first day of the week) as a zero-padded decimal number. All days in a new year preceding the first Monday are considered to be in week 0."]
            ]
    },
    "chart": {
      "description": "Generates a chart visualization of the results of a search.",
      "examples": [
        "... | chart count by sourcetype",
        "... | chart avg(duration) by sourcetype",
        "... | chart sum(bytes) by sourcetype"
      ]
    },
    "cluster": {
      "description": "Groups events based on their similarity.",
      "examples": [
        "| cluster showcount=true<br>| table _raw, cluster_count",
        "... | cluster showcount=t | sort cluster_count",
        "error | cluster t=0.9 showcount=t | sort - cluster_count | head 20",
        "... | cluster labelonly=t showcount=t | sort - cluster_count, cluster_label, _time | dedup 5 cluster_label"
      ]
    },
    "collect": {
      "description": "Collects events into a single event.",
      "examples": [
        "... | collect",
        "... | collect field1",
        "... | collect field1, field2"
      ]
    },
    "contingency": {
      "description": "Generates a contingency table of the results of a search.",
      "examples": [
        "... | contingency field1 field2",
        "... | contingency field1 field2 row=false",
        "... | contingency field1 field2 row=false col=false"
      ]
    },
  "makemv": {
      "description": "Converts a single-valued field into a multivalue field.",
      "examples": [
        "... | makemv delim=, field",
        "... | makemv delim=, field1, field2",
        "... | makemv delim=, field1, field2, field3"
      ]
    },
    "multikv": {
      "description": "Extracts fields from events that contain multivalue fields.",
      "examples": [
        "... | multikv",
        "... | multikv fields field1, field2",
        "... | multikv fields field1, field2, field3"
      ]
    },
    "mvmap": {
      "description": "This function iterates over the values of a multivalue field and performs an operation on each value. The function returns a multivalue field with the list of results.",
      "examples": [
        "... | eval n=mvmap(results, results*10)",
        "... | eval n=mvmap(results, results*threshold)"
      ]
    },
    "mvcombine": {
      "description": "Combines multivalue fields into a single multivalue field.",
      "examples": [
        "... | index=* host=www* | stats max(bytes) AS max, min(bytes) AS min BY host | mvcombine host",
        "... | mvcombine field1, field2, field3",
        "... | mvcombine field1, field2, field3, field4"
      ]
    },
    "mvexpand": {
      "description": "Expands multivalue fields into separate events.",
      "examples": [
        "... | mvexpand field",
        "... | mvexpand field1, field2",
        "... | mvexpand field1, field2, field3"
      ]
    },
    "mvfilter": {
      "description": "Filters multivalue fields based on a specified condition.",
      "examples": [
        '... | eval items=mvfilter(isnotnull(x))',
        '... | eval n=mvfilter(match(email, "\.net$") OR match(email, "\.org$"))'
      ]
    },
    "case": {
      "description": "Evaluates a condition and returns one of two values based on the result of the evaluation.",
      "examples:": [
        '...| eval description=case(status == 200, "OK", status ==404, "Not found", status == 500, "Internal Server Error")'
    ]},
    "match": {
      "description": "Filters events based on a specified condition.",
      "examples": [
        "... | eval name=if(match(name, \"^a.*\"), \"starts with a\", \"does not start with a\")",
      ]
    },
    "lookup": {
      "description": "Adds fields from an external source to your search results.",
      "examples": [
        "... | lookup dnslookup clientip AS ip OUTPUT clienthost",
        "... | lookup dnslookup clientip AS ip OUTPUT clienthost, clientip"
      ]},
    "inputlookup": {
      "description": "Adds fields from a lookup table to your search results.",
      "examples": [
          "... | inputlookup dnslookup",
          "... | inputlookup dnslookup | search clientip=10.10.10.10"
      ]},

    "map": {
      "description": "Adds fields from an external source to your search results.",
      "examples": [
        "... | map search=\"search sourcetype=access_combined\""
      ]},
    "foreach": {
      "description": "Use this command to run a subsearch that includes a template to iterate over the following elements",
      "examples": [`foreach  mode=multivalue $mv1$
      [ eval<br>index=mvfind($mv2$,<<ITEM>>),<br>item=if(isnull(index),<<ITEM>>,""),<br>LeftDiffSet= mvappend(LeftDiffSet,item)<br>]<br>
      | eval LeftDiffSet=mvfilter(match(LeftDiffSet,"."))<br>
      | fields - index,item`]},

    "mvzip": {
      "description": "Combines multivalue fields into a single multivalue field.",
      "examples": [
        "... | mvzip field1, field2",
        "... | mvzip field1, field2, field3",
        "... | mvzip field1, field2, field3, field4",
      ]},
    "xyseries": {
        "description": "Converts results into a tabular format that is suitable for graphing. This command is the inverse of the untable command.",
        "examples": [
          "... | sourcetype=access_* status=200 action=purchase | top categoryId | xyseries categoryId count percent"
        ]
    },
    "extract": {
      "description": "Extracts field-value pairs from the search results. The extract command works only on the _raw field. If you want to extract from another field, you must perform some field renaming before you run the extract command.",
      "examples": [
        "... | extract pairdelim=\"|;\", kvdelim=\"=:\""
      ]
    },
    "replace": {
      "description": "Replaces field values in your search results.",
      "examples": [
        "... | replace 0 WITH Critical, 1 WITH Error IN msg_level",
        "| replace \"Modified Records Only\" WITH \"Modified\",* WITH \"All\" IN jobType",
      ]
    },
    "mvindex": {
        "description": "Returns the value of a multivalue field at a specified index.",
        "examples": [
          "... | eval my_names=mvindex(names,2) ",
          "... | eval my_names=mvindex(names,0,3)",
          "... | mvindex field 2</cde>"
        ]
  },
  "split": {
        "description": "Splits a multivalue field into separate events.",
        "examples": [
          "... | split field",
          "... | split field limit=100"
        ]},
    "earliest": {
        "description": "Filter events by time",
        "examples": [
          "...WHERE earliest=-5d@w1 AND latest=@w6",
          '...WHERE earliest="2023-11-15:20:00:00" AND latest="2023-11-22:20:00:00'
        ]
  },
  "case": {
    "description": "Accepts alternating conditions and values. Returns the first value for which the condition evaluates to TRUE.",
    "examples": [
        '... | eval Description=case(depth<=70, "Low", depth>70 AND depth<=300, "Mid", depth>300, "Deep")'
      ]},
  "makeresults": {
      "description": "Generates a specified number of events.",
      "arguments":[
        {"name": "count", "description": "The number of events to generate."},
        {"name": "format","description": "The format of the events to generate. The format can be csv or json."},
        {"name": "data", "description": "The data to generate. The data can be a string in csv or json format."}
      ],
      "examples": [
          '| makeresults format=csv data="name, age<br>John,35<br>Sarah,39"',
          '| makeresults format=json data="[{\"name\":\"John\", \"age\":35}, {\"name\":\"Sarah\", \"age\":39}]"',
          "| makeresults | eval newfield=\"some value\"",
          '| makeresults count=4<br>| streamstats count<br>| eval age = case(count=1, 25, count=2, 39, count=3, 31, count=4, null())<br>| eval city = case(count=1 OR count=3, "San Francisco", count=2 OR count=4, "Seattle")'
        ]

     },
     "reltime": {
      "description": "Creates one or more relative time fields and adds the field or fields to returned events. Each added relative time field provides a human-readable value of the difference between \"now\" (the start time of the search) and the timestamp value of a corresponding field in the returned event. Human-readable values look like 5 days ago, 1 minute ago, 2 years ago, and so on.",
      "examples": [
        "... | reltime",
        "... | reltime timefield=earliest_time",
        "... | reltime timefield=current_time prefix=reltime_now_",
        "... | reltime timefield=\"max_time,min_time,current_time"
      ]},
     "transpose": {
        "description": "Returns the specified number of rows (search results) as columns (list of field values), such that each search row becomes a column.",
        "examples":[
          'sourcetype=access_* status=200 |<br> stats count AS views count(eval(action="addtocart")) AS addtocart count(eval(action="purchase")) AS purchases <br>| table addtocart purchases <br>| transpose'
        ]
           }

}

let splunkDoclinks = {
  "abstract": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Abstract",
  "accum": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Accum",
  "addcoltotals": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Addcoltotals",
  "addinfo": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Addinfo",
  "addtotals": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Addtotals",
  "analyzefields": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Analyzefields",
  "anomalies": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Anomalies",
  "anomalousvalue": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Anomalousvalue",
  "anomalydetection": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Anomalydetection",
  "append": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Append",
  "appendcols": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Appendcols",
  "appendpipe": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Appendpipe",
  "arules": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Arules",
  "associate": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Associate",
  "autoregress": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Autoregress",
  "awssnsalert": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Awssnsalert",
  "bin": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Bin",
  "bucket": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Bucket",
  "bucketdir": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Bucketdir",
  "chart": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Chart",
  "cluster": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Cluster",
  "cofilter": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Cofilter",
  "collect": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Collect",
  "concurrency": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Concurrency",
  "contingency": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Contingency",
  "convert": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Convert",
  "correlate": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Correlate",
  "ctable": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Ctable",
  "datamodel": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Datamodel",
  "datamodelsimple": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Datamodelsimple",
  "dbinspect": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Dbinspect",
  "dbxquery": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Dbxquery",
  "dedup": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Dedup",
  "delete": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Delete",
  "delta": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Delta",
  "diff": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Diff",
  "entitymerge": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Entitymerge",
  "erex": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Erex",
  "eval": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Eval",
  "eventcount": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Eventcount",
  "eventstats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Eventstats",
  "extract": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Extract",
  "fieldformat": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Fieldformat",
  "fields": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Fields",
  "fieldsummary": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Fieldsummary",
  "filldown": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Filldown",
  "fillnull": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Fillnull",
  "findtypes": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Findtypes",
  "folderize": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Folderize",
  "foreach": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Foreach",
  "format": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Format",
  "from": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/From",
  "fromjson": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Fromjson",
  "gauge": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Gauge",
  "gentimes": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Gentimes",
  "geom": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Geom",
  "geomfilter": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Geomfilter",
  "geostats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Geostats",
  "head": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Head",
  "highlight": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Highlight",
  "history": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/History",
  "iconify": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Iconify",
  "inputcsv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Inputcsv",
  "inputintelligence": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Inputintelligence",
  "inputlookup": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Inputlookup",
  "iplocation": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Iplocation",
  "join": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Join",
  "kmeans": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Kmeans",
  "kvform": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Kvform",
  "loadjob": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Loadjob",
  "localize": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Localize",
  "localop": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Localop",
  "lookup": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Lookup",
  "makecontinuous": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Makecontinuous",
  "makemv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Makemv",
  "makeresults": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Makeresults",
  "map": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Map",
  "mcollect": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mcollect",
  "metadata": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Metadata",
  "metasearch": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Metasearch",
  "meventcollect": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Meventcollect",
  "mpreview": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mpreview",
  "msearch": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Msearch",
  "mstats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mstats",
  "multikv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Multikv",
  "multisearch": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Multisearch",
  "mvcombine": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mvcombine",
  "mvexpand": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mvexpand",
  "mvreverse": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Mvreverse",
  "nomv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Nomv",
  "outlier": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Outlier",
  "outputcsv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Outputcsv",
  "outputlookup": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Outputlookup",
  "outputtext": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Outputtext",
  "overlap": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Overlap",
  "pivot": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Pivot",
  "predict": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Predict",
  "rangemap": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rangemap",
  "rare": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rare",
  "regex": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Regex",
  "reltime": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Reltime",
  "rename": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rename",
  "replace": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Replace",
  "require": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Require",
  "rest": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rest",
  "return": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Return",
  "reverse": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Reverse",
  "rex": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rex",
  "rtorder": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Rtorder",
  "run": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Run",
  "savedsearch": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Savedsearch",
  "script": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Script",
  "scrub": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Scrub",
  "search": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Search",
  "searchtxn": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Searchtxn",
  "selfjoin": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Selfjoin",
  "sendalert": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sendalert",
  "sendemail": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sendemail",
  "set": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Set",
  "setfields": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Setfields",
  "sichart": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sichart",
  "sirare": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sirare",
  "sistats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sistats",
  "sitimechart": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sitimechart",
  "sitop": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sitop",
  "snowincident": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Snowincident",
  "snowincidentstream": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Snowincidentstream",
  "snowevent": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Snowevent",
  "snoweventstream": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Snoweventstream",
  "sort": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Sort",
  "spath": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Spath",
  "stats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Stats",
  "strcat": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Strcat",
  "streamstats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Streamstats",
  "table": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Table",
  "tags": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Tags",
  "tail": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Tail",
  "timechart": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Timechart",
  "timewrap": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Timewrap",
  "tojson": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Tojson",
  "top": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Top",
  "transaction": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Transaction",
  "transpose": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Transpose",
  "trendline": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Trendline",
  "tscollect": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Tscollect",
  "tstats": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Tstats",
  "typeahead": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Typeahead",
  "typelearner": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Typelearner",
  "typer": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Typer",
  "union": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Union",
  "uniq": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Uniq",
  "untable": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Untable",
  "walklex": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Walklex",
  "where": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Where",
  "x11": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/X11",
  "xmlkv": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Xmlkv",
  "xmlunescape": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Xmlunescape",
  "xpath": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Xpath",
  "xyseries": "https://docs.splunk.com/Documentation/Splunk/9.2.0/SearchReference/Xyseries"
 }

function retrieveSnippetsEventListener(editor) {
  window.addEventListener("message", function(event) {
    if (event.data.type === "retrieve_snippets") {
        // Handle the result
        // console.log(event.data.snippets)
        // var snippets = JSON.parse(localStorage.getItem("snippets") || "{}");
        var snippets = event.data.snippets;

        // Create a popup with a list of snippets
        var popup = document.createElement("div");
        popup.classList.add("snippets");


        // Add a title to the popup
        var title = document.createElement("h2");
        title.textContent = "Saved Queries...";
        popup.appendChild(title);

        for (var name in snippets) {
          var snippet = document.createElement("li");
          snippet.style.listStyleType = "none";

          // Create a span for the snippet name
          var snippetName = document.createElement("span");
          snippetName.textContent = name;
          snippetName.style.cursor = "pointer";
          snippetName.setAttribute("name", name);
          snippetName.onclick = function(e) {
            e.stopPropagation();
            editor.setValue(snippets[this.textContent.trim()]);
            // document.body.removeChild(popup);
          };

          // Create a delete button
          var deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";

          deleteButton.setAttribute("name", name);
          deleteButton.classList.add("deleteButton");
          deleteButton.onclick = function(e) {
            e.stopPropagation(); // Prevent the snippet onclick event from firing
            var snippetKey = this.getAttribute("name");
            if (confirm("Are you sure you want to delete this snippet?")) {
              window.postMessage({ type: "delete_snippet", name: snippetKey }, "*");
              this.parentNode.remove();
            }
          };

          // Add the delete button and the snippet name to the li
          snippet.appendChild(deleteButton);
          snippet.appendChild(snippetName);

          popup.appendChild(snippet);
        }
        document.body.appendChild(popup);

        // Close the popup when the user clicks outside it
        document.body.addEventListener('click', function(e) {
          if (e.target === popup || popup.contains(e.target)) {
            return;
          }
          try {
            document.body.removeChild(popup);
          } catch (error) {
            return
          }
        });

        // Close the popup when the user presses the Esc key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape') {
            try {
              document.body.removeChild(popup);
            } catch (error) {
              return
            }
          }
        });
    }
  }, false);
}


// Create a new observer
var observer = new MutationObserver(function(mutations) {
  // For each mutation
  mutations.forEach(function(mutation) {
    // If the addedNodes property has one or more nodes
    if (mutation.addedNodes.length) {
      // Check if the .ace_editor is now in the DOM
      if(document.querySelector(".ace_editor") != null){
        // If it is, disconnect the observer and run your code
        observer.disconnect();
        // Save snippet command
    if(document.querySelector(".ace_editor") != null){
      let editor = ace.edit(document.querySelector(".ace_editor"))
      editor.getSession().setTabSize(2); // Set tab size to 2 spaces
      editor.getSession().setUseSoftTabs(true); // Enable soft tabs
      let showLineNumbers = false
      let ranges
      let settings = JSON.parse(localStorage.getItem("SplunkCommentSettings"))
      retrieveSnippetsEventListener(editor)

      window.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'R') {
          window.postMessage({ type: "get_snippets", text: "Hello from the webpage!" }, "*");
          event.preventDefault();
          // Your code here
        }
      });


      if (!window.snippetSaveListenerAdded) {
        window.addEventListener('keydown', function(event) {
          if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'S') {
            saveSnippet(editor)
            event.preventDefault();
            event.stopPropagation();
            // Your code here
          }
        });
        window.snippetSaveListenerAdded = true;
      }
    // Add command to save a snippet
    editor.commands.addCommand({
      name: "saveSnippet",
      bindKey: {win: "Ctrl-Shift-S", mac: "Command-Shift-S"},
      exec: function(editor) {
        saveSnippet(editor)
      }
    });



    // Add command to retrieve a snippet
    editor.commands.addCommand({
      name: "retrieveSnippet",
      bindKey: {win: "Alt-z", mac: "Ctrl-Command-R"},
      bindKey: {win: "Shift-Ctrl-r", mac: "Ctrl-Command-R"},
      exec: function(editor) {
        window.postMessage({ type: "get_snippets", text: "Hello from the webpage!" }, "*");


      }
    });




      editor.commands.addCommand({
          name: "CollapseComments",
          bindKey: {win: "Ctrl-'", mac: "Command-'"},
          exec: function(editor) {
            foldLines(editor)

          },
          readOnly: false
      });





      editor.commands.addCommand({
          name: "showCommandHelp",
          bindKey: {win: "Ctrl-,", mac: "Command-,"},
          exec: function(editor) {
            showCommandHelp(editor)

              },
              readOnly: false
      });

      editor.commands.addCommand({
          name: "showCommandHelp",
          bindKey: {win: "Ctrl-Shift-/", mac: "Command-Shift-/"},
          exec: function(editor) {

            if(lineIsComment(editor)){
              toggleComments(editor)
            }else{
              toggleComments(editor)
              foldLines(editor)
            }

              },
              readOnly: false
      });

      editor.commands.addCommand({
        name: "showCommandHelpSpace",
        bindKey: {win: "Ctrl-Space", mac: "Command-Space"},
        exec: function(editor) {
          showCommandHelp(editor)

            },
            readOnly: false
    });



// Enable line cut
      if(settings.enableLineCut){
          editor.commands.addCommand({
              name: "cutLineOnCtrlX",
              bindKey: {win: "Ctrl-x", mac: "Command-x"},
              exec: function(editor) {
                  var cursorPosition = editor.getCursorPosition();
                  var range = editor.getSelectionRange();
                  var session = editor.getSession();
                  // If there is no selection, get the text for the whole line
                  if(range.end.column == range.start.column){
                  // Get the row number of the active line
                      var cursorPosition = editor.getCursorPosition();
                      var activeLine = cursorPosition.row;
                      var selectedText = session.getLine(activeLine);
                      editor.removeLines(cursorPosition.row, 1);
                      // But if there is a selection, get only the selected text
                  }else{
                      var selectedText = editor.getSelectedText();
                      // Replace the selected text with an empty string
                      session.replace(range, "");

                  }
                  // Set the clipboard with the result from above
                  navigator.clipboard.writeText(selectedText);

              },
              readOnly: false
          });
      }

// Show line numbers
      if(settings.enableShowLineNumbers){
          editor.commands.addCommand({
              name: "toggleShowLineNumbers",
              bindKey: {win: "Ctrl-l", mac: "Command-l"},
              exec: function(editor) {
                  showLineNumbers = !showLineNumbers
                  editor.renderer.setShowGutter(showLineNumbers);
                  editor.renderer.setOption('showLineNumbers', showLineNumbers);
              },
              readOnly: false
          });
      }

// Enable comments
      if(settings.enableComments){
          editor.commands.addCommand({
              name: "toggleCommentLines",
              bindKey: {win: "Ctrl-/", mac: "Command-/"},
              exec: function(editor) {

                 toggleComments(editor)


          },
          readOnly: false
      });

}


} // end
      }
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });



function showCommandHelp(editor) {
  if (document.querySelector('#infoPopup')) {
    deleteInfoPopup();
    return;
  }

  var cursorPosition = editor.getCursorPosition();
  let code = editor.getValue();
  let lines = code.split('\n');

  let line = lines[cursorPosition.row];
  let leftPart = line.substring(0, cursorPosition.column);
  let rightPart = line.substring(cursorPosition.column);

  let leftWordPart = leftPart.split(/[^a-z]+/i).pop();
  let rightWordPart = rightPart.split(/[^a-z]+/i)[0];

  let wordAroundCursor = leftWordPart + rightWordPart;
  let selectedWord = wordAroundCursor;
  if (selectedWord !== '') {


      var help = findCommandReference(selectedWord);
      var innerHtml = "";

      if (!help) {
        innerHtml = `No topic found for ${selectedWord}`;
      } else {
        var docLink = splunkDoclinks[selectedWord] ? `<a style="color: rgb(18 147 255);" href="${splunkDoclinks[selectedWord]}" target="_blank">See documentation...</a>` : '';
        var tables = Object.keys(help).filter(key => key !== 'synonyms').map(key => {
          if (key === 'description') {
            return `<p style="color: white">${help[key]}</p>`;
          }

          var value = help[key];
          var tableRows = '';

          if (Array.isArray(value)) {
            value.forEach(item => {
              if (Array.isArray(item)) {
                tableRows += `<tr>${item.map(i => `<td>${i}</td>`).join('')}</tr>`;
              } else {
                tableRows += `<tr><td>${item}</td></tr>`;
              }
            });
          } else {
            tableRows = `<tr><td>${value}</td></tr>`;
          }

          return `
            <h4>${key}</h4>
            <table class="examples">
              ${tableRows}
            </table>
          `;
        }).join('');

        innerHtml = `
          <div class="help-popup">
            <h4>${selectedWord} ${docLink}</h4>
            ${tables}
          </div>
        `;
      }

      showPopup(innerHtml,editor);

  }}




function deleteInfoPopup() {
    var infoPopup = document.getElementById("infoPopup");
    if (infoPopup) {
        infoPopup.remove();
    }
  }



function findCommandReference(word) {
    for (var key in command_reference) {
        if (key === word || (command_reference[key].synonyms && command_reference[key].synonyms.includes(word))) {
            return command_reference[key];
        }
    }
    return null;
}




function showHelp(){
    document.querySelector('.search-assistant-activator').click()

}

function showPopup(innerHtml, editor) {
  var infoPopup = document.createElement("div");
  infoPopup.id = "infoPopup";
  var popupPosition = getPopupPosition(editor);
  infoPopup.style.top = popupPosition.top;
  infoPopup.style.left = popupPosition.left;
  infoPopup.innerHTML = innerHtml;
  document.body.appendChild(infoPopup);
  infoPopup.style.display = "block";

  document.addEventListener("click", function(event) {
    var infoPopup = document.getElementById("infoPopup");
    var isCssEdit = false;
    let element = event.target;
    while (element) {
      if (element.id === 'MagiCSS-bookmarklet') {
        isCssEdit = true;
        break;
      }

      // Move up to the parent element
      element = element.parentNode;
    }

    if (infoPopup && !infoPopup.contains(event.target) && !isCssEdit) {
      deleteInfoPopup();
    }
  });

  // Add keydown event listener
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      deleteInfoPopup();
    }
  });
}

function getPopupPosition(editor) {
  var cursorPosition = editor.getCursorPosition();
  var lineHeight = editor.renderer.lineHeight;
  var pos = editor.renderer.textToScreenCoordinates(cursorPosition.row, cursorPosition.column);

  var top = (pos.pageY + lineHeight + window.scrollY) + "px";
  var left = (pos.pageX) + "px";

  return { top: top, left: left };
}


function hideInfoPopup() {
    infoPopup.style.display = "none";
    // Remove the event listener
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(event, infoPopup) {
    // Check if 'Escape' key was pressed and the popup is currently visible
    deleteInfoPopup();
}


// Detect if line is a comment
function lineIsComment(editor) {
    var session = editor.getSession();

    var cursor = editor.getCursorPosition();
    var token = session.getTokenAt(cursor.row, cursor.column);

    return token.type === "comment"

}


function selectCommentLine(editor){

    var searchString = "```";
    var searchOptions = {
        backwards: true,
        wrap: true,
        caseSensitive: false,
        wholeWord: false,
        regExp: true
    };
    var starts = editor.find(searchString, searchOptions);

    var searchOptions = {
        backwards: false,
        wrap: true,
        caseSensitive: false,
        wholeWord: false,
        regExp: true
    };
    var ends = editor.find(searchString, searchOptions);

    editor.selection.setRange({start: {row: starts.start.row}, end: {row: ends.end.row+1}},-1)
    return {start: starts.start.row, end: ends.end.row+1, endColumn: ends.end.column, startColumn: starts.start.column}
}




function findAndReplace(editor,searchFor,replaceWith,backwards){
        var searchOptions = {
                                backwards: backwards,
                                wrap: false,
                                caseSensitive: false,
                                wholeWord: false,
                                regExp: true
                            };

        editor.find(searchFor, searchOptions);
        editor.session.replace(editor.selection.getRange(), replaceWith)
}


function saveSnippet(editor){
  var code = editor.getSelectedText();

  if (code === "") {
    editor.selectAll();
    code = editor.getSelectedText();
  }
  var name = prompt("Enter a name for the snippet");
  if (name) {
    // Save the snippet to localStorage
    var snippets = JSON.parse(localStorage.getItem("snippets") || "{}");
    snippets[name] = code;
    window.postMessage({ type: "save_snippet", name: name,code: code }, "*");
  }

}


function foldLines(editor){
  if(!lineIsComment(editor)){
    return
  }

  var cursorPosition = editor.getCursorPosition();
  var lineText = editor.session.getLine(cursorPosition.row);
  editor.navigateTo(cursorPosition.row,Math.floor(lineText.length/2))

  var rows = selectCommentLine(editor)



  Range=ace.require("ace/range").Range;
  editor.session.addFold("........", new Range(rows.start,rows.startColumn+15,rows.end-1,rows.endColumn-3));
  editor.navigateTo(cursorPosition.row,0)
}


function toggleComments(editor){
   // Get the current cursor position
   var cursorPosition = editor.getCursorPosition();

   // Handle when the current line is a comment
   if(lineIsComment(editor)){
       // console.log("line is comment")
       // If the current line is a comment, it helps to start from the middle of the line, so let's move it there.
       var lineText = editor.session.getLine(cursorPosition.row);
       editor.navigateTo(cursorPosition.row,Math.floor(lineText.length/2))
       // Replace the backticks at the beginning
       var searchOptions = {
           backwards: true,
           wrap: true,
           caseSensitive: false,
           wholeWord: false,
           regExp: true
       };
       editor.find('```', searchOptions);
       editor.session.replace(editor.selection.getRange(), "")

       // Replace the backticks at the end
       var searchOptions = {
           backwards: false,
           wrap: true,
           caseSensitive: false,
           wholeWord: false,
           regExp: true
       };
       editor.find('```', searchOptions);
       editor.session.replace(editor.selection.getRange(), "")
       return
   }

   let lines = [];
   ranges = editor.selection.getAllRanges();
   var lineCount = editor.session.getLength();
   var start = ranges[0].start.row;
   var end = ranges[0].end.row;
   var sameLine = lineCount-1 == end;
   var appendChart = sameLine ? "" : "\n";

   // Insert ``` at the beginning of the selected lines
   editor.session.insert({row: start, column: 0}, '```');

   // Insert ``` at the end of the selected lines
   editor.session.insert({row: end, column: editor.session.getLine(end).length}, '```');
}
