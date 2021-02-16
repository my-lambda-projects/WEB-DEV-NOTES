# Data Types

> PostgreSQL has a rich set of native data types available to users. Users can add new types to PostgreSQL using the CREATE TYPE command.

PostgreSQL has a rich set of native data types available to users. Users can add new types to PostgreSQL using the [CREATE TYPE](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/sql-createtype.html) command.

[Table 8-1](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/datatype.html#DATATYPE-TABLE) shows all the built-in general-purpose data types. Most of the alternative names listed in the "Aliases" column are the names used internally by PostgreSQL for historical reasons. In addition, some internally used or deprecated types are available, but are not listed here.

**Table 8-1. Data Types**

  
| Name | Aliases | Description |
| --- | --- | --- |
| bigint | int8 | signed eight-byte integer |
| bigserial | serial8 | autoincrementing eight-byte integer |
| bit \[ (n) \] |   | fixed-length bit string |
| bit varying \[ (n) \] | varbit \[ (n) \] | variable-length bit string |
| boolean | bool | logical Boolean (true/false) |
| box |   | rectangular box on a plane |
| bytea |   | binary data ("byte array") |
| character \[ (n) \] | char \[ (n) \] | fixed-length character string |
| character varying \[ (n) \] | varchar \[ (n) \] | variable-length character string |
| cidr |   | IPv4 or IPv6 network address |
| circle |   | circle on a plane |
| date |   | calendar date (year, month, day) |
| double precision | float8 | double precision floating-point number (8 bytes) |
| inet |   | IPv4 or IPv6 host address |
| integer | int, int4 | signed four-byte integer |
| interval \[ fields \] \[ (p) \] |   | time span |
| json |   | textual JSON data |
| jsonb |   | binary JSON data, decomposed |
| line |   | infinite line on a plane |
| lseg |   | line segment on a plane |
| macaddr |   | MAC (Media Access Control) address |
| money |   | currency amount |
| numeric \[ (p, s) \] | decimal \[ (p, s) \] | exact numeric of selectable precision |
| path |   | geometric path on a plane |
| pg\_lsn |   | PostgreSQL Log Sequence Number |
| point |   | geometric point on a plane |
| polygon |   | closed geometric path on a plane |
| real | float4 | single precision floating-point number (4 bytes) |
| smallint | int2 | signed two-byte integer |
| smallserial | serial2 | autoincrementing two-byte integer |
| serial | serial4 | autoincrementing four-byte integer |
| text |   | variable-length character string |
| time \[ (p) \] \[ without time zone \] |   | time of day (no time zone) |
| time \[ (p) \] with time zone | timetz | time of day, including time zone |
| timestamp \[ (p) \] \[ without time zone \] |   | date and time (no time zone) |
| timestamp \[ (p) \] with time zone | timestamptz | date and time, including time zone |
| tsquery |   | text search query |
| tsvector |   | text search document |
| txid\_snapshot |   | user-level transaction ID snapshot |
| uuid |   | universally unique identifier |
| xml |   | XML data |

> **Compatibility:** The following types (or spellings thereof) are specified by SQL: bigint, bit, bit varying, boolean, char, character varying, character, varchar, date, double precision, integer, interval, numeric, decimal, real, smallint, time (with or without time zone), timestamp (with or without time zone), xml.

Each data type has an external representation determined by its input and output functions. Many of the built-in types have obvious external formats. However, several types are either unique to PostgreSQL, such as geometric paths, or have several possible formats, such as the date and time types. Some of the input and output functions are not invertible, i.e., the result of an output function might lose accuracy when compared to the original input.


[Source](https://www.postgresql.org/docs/9.5/datatype.html)