/* tslint:disable:file-header */

/* tslint:disable:variable-name */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-06-26T08:38:43.449Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
export const CCustkey = {
    /**
     * Display Form Title: C custkey
     * Display Form ID: customer.c_custkey
     */
    Default: newAttribute("customer.c_custkey"),
    /**
     * Display Form Title: C name
     * Display Form ID: customer.c_custkey.c_name
     */
    CName: newAttribute("customer.c_custkey.c_name"),
};
export const NationName = {
    /**
     * Display Form Title: Location
     * Display Form ID: customer.geo__nation_name__location
     */
    Location: newAttribute("customer.geo__nation_name__location"),
    /**
     * Display Form Title: Nation name
     * Display Form ID: customer.nation_name
     */
    Default: newAttribute("customer.nation_name"),
};
/**
 * Attribute Title: Region name
 * Display Form ID: attr.customer.region_name
 */

export const RegionName = newAttribute("customer.region_name");
/**
 * Attribute Title: Customer name
 * Display Form ID: attr.lineitem.customer_name
 */

export const CustomerName = newAttribute("lineitem.customer_name");
export const CustomerNationName = {
    /**
     * Display Form Title: Customer nation name
     * Display Form ID: lineitem.customer_nation_name
     */
    Default: newAttribute("lineitem.customer_nation_name"),
    /**
     * Display Form Title: Location
     * Display Form ID: lineitem.geo__customer_nation_name__location
     */
    Location: newAttribute("lineitem.geo__customer_nation_name__location"),
};
/**
 * Attribute Title: Customer region name
 * Display Form ID: attr.lineitem.customer_region_name
 */

export const CustomerRegionName = newAttribute("lineitem.customer_region_name");
/**
 * Attribute Title: L linenumber
 * Display Form ID: attr.lineitem.l_linenumber
 */

export const LLinenumber = newAttribute("lineitem.l_linenumber");
/**
 * Attribute Title: L linestatus
 * Display Form ID: attr.lineitem.l_linestatus
 */

export const LLinestatus = newAttribute("lineitem.l_linestatus");
/**
 * Attribute Title: L pk
 * Display Form ID: attr.lineitem.l_pk
 */

export const LPk = newAttribute("lineitem.l_pk");
/**
 * Attribute Title: L returnflag
 * Display Form ID: attr.lineitem.l_returnflag
 */

export const LReturnflag = newAttribute("lineitem.l_returnflag");
/**
 * Attribute Title: L shipmode
 * Display Form ID: attr.lineitem.l_shipmode
 */

export const LShipmode = newAttribute("lineitem.l_shipmode");
/**
 * Attribute Title: O custkey
 * Display Form ID: attr.lineitem.o_custkey
 */

export const OCustkey = newAttribute("lineitem.o_custkey");
/**
 * Attribute Title: O orderstatus
 * Display Form ID: attr.lineitem.o_orderstatus
 */

export const OOrderstatus = newAttribute("lineitem.o_orderstatus");
/**
 * Attribute Title: Part name
 * Display Form ID: attr.lineitem.part_name
 */

export const PartName = newAttribute("lineitem.part_name");
/**
 * Attribute Title: P brand
 * Display Form ID: attr.lineitem.p_brand
 */

export const PBrand = newAttribute("lineitem.p_brand");
/**
 * Attribute Title: P size
 * Display Form ID: attr.lineitem.p_size
 */

export const PSize = newAttribute("lineitem.p_size");
/**
 * Attribute Title: Supplier name
 * Display Form ID: attr.lineitem.supplier_name
 */

export const SupplierName = newAttribute("lineitem.supplier_name");
export const SupplierNationName = {
    /**
     * Display Form Title: Location
     * Display Form ID: lineitem.geo__supplier_nation_name__location
     */
    Location: newAttribute("lineitem.geo__supplier_nation_name__location"),
    /**
     * Display Form Title: Supplier nation name
     * Display Form ID: lineitem.supplier_nation_name
     */
    Default: newAttribute("lineitem.supplier_nation_name"),
};
/**
 * Attribute Title: Supplier region name
 * Display Form ID: attr.lineitem.supplier_region_name
 */

export const SupplierRegionName = newAttribute("lineitem.supplier_region_name");
/**
 * Attribute Title: Customer name
 * Display Form ID: attr.orders.customer_name
 */

export const CustomerName_1 = newAttribute("orders.customer_name");
export const CustomerNationName_1 = {
    /**
     * Display Form Title: Customer nation name
     * Display Form ID: orders.customer_nation_name
     */
    CustomerNationName: newAttribute("orders.customer_nation_name"),
    /**
     * Display Form Title: Location
     * Display Form ID: orders.geo__customer_nation_name__location
     */
    Location: newAttribute("orders.geo__customer_nation_name__location"),
};
/**
 * Attribute Title: Customer region name
 * Display Form ID: attr.orders.customer_region_name
 */

export const CustomerRegionName_1 = newAttribute("orders.customer_region_name");
/**
 * Attribute Title: O orderkey
 * Display Form ID: attr.orders.o_orderkey
 */

export const OOrderkey = newAttribute("orders.o_orderkey");
/**
 * Attribute Title: O orderstatus
 * Display Form ID: attr.orders.o_orderstatus
 */

export const OOrderstatus_1 = newAttribute("orders.o_orderstatus");
/**
 * Attribute Title: P brand
 * Display Form ID: attr.part.p_brand
 */

export const PBrand_1 = newAttribute("part.p_brand");
export const PPartkey = {
    /**
     * Display Form Title: P partkey
     * Display Form ID: part.p_partkey
     */
    Default: newAttribute("part.p_partkey"),
    /**
     * Display Form Title: P name
     * Display Form ID: part.p_partkey.p_name
     */
    PName: newAttribute("part.p_partkey.p_name"),
};
/**
 * Attribute Title: P size
 * Display Form ID: attr.part.p_size
 */

export const PSize_1 = newAttribute("part.p_size");
export const NationName_1 = {
    /**
     * Display Form Title: Location
     * Display Form ID: supplier.geo__nation_name__location
     */
    Location: newAttribute("supplier.geo__nation_name__location"),
    /**
     * Display Form Title: Nation name
     * Display Form ID: supplier.nation_name
     */
    NationName: newAttribute("supplier.nation_name"),
};
/**
 * Attribute Title: Region name
 * Display Form ID: attr.supplier.region_name
 */

export const RegionName_1 = newAttribute("supplier.region_name");
export const SSuppkey = {
    /**
     * Display Form Title: S suppkey
     * Display Form ID: supplier.s_suppkey
     */
    Default: newAttribute("supplier.s_suppkey"),
    /**
     * Display Form Title: S name
     * Display Form ID: supplier.s_suppkey.s_name
     */
    SName: newAttribute("supplier.s_suppkey.s_name"),
};
/**
 * Metric Title: m1 title
 * Metric ID: m1
 * Metric Type: MAQL Metric
 */

export const M1Title = newMeasure(idRef("m1", "measure"));
/**
 * Metric Title: m2 title
 * Metric ID: m2
 * Metric Type: MAQL Metric
 */

export const M2Title = newMeasure(idRef("m2", "measure"));
/**
 * Metric Title: m3 title
 * Metric ID: m3
 * Metric Type: MAQL Metric
 */

export const M3Title = newMeasure(idRef("m3", "measure"));
/**
 * Metric Title: quantities
 * Metric ID: quantity
 * Metric Type: MAQL Metric
 */

export const Quantities = newMeasure(idRef("quantity", "measure"));
/**
 * Metric Title: Volume - raw cost (extended price subtracted by discount)
 * Metric ID: Volume
 * Metric Type: MAQL Metric
 */

export const VolumeRawCostExtendedPriceSubtractedByDiscount = newMeasure(idRef("Volume", "measure"));
/**
 * Metric Title: Filter volume, so only transfer between two nations is returned
 * Metric ID: Volume filter nations
 * Metric Type: MAQL Metric
 */

export const FilterVolumeSoOnlyTransferBetweenTwoNationsIsReturned = newMeasure(
    idRef("Volume filter nations", "measure"),
);
/**
 * Fact Title: C acctbal
 * Fact ID: customer.c_acctbal
 */

export const CAcctbal = {
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: C acctbal
     * Fact ID: customer.c_acctbal
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("customer.c_acctbal", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: L discount
 * Fact ID: lineitem.l_discount
 */

export const LDiscount = {
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: L discount
     * Fact ID: lineitem.l_discount
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("lineitem.l_discount", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: L extendedprice
 * Fact ID: lineitem.l_extendedprice
 */

export const LExtendedprice = {
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: L extendedprice
     * Fact ID: lineitem.l_extendedprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("lineitem.l_extendedprice", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: L quantity
 * Fact ID: lineitem.l_quantity
 */

export const LQuantity = {
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: L quantity
     * Fact ID: lineitem.l_quantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("lineitem.l_quantity", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: L tax
 * Fact ID: lineitem.l_tax
 */

export const LTax = {
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: L tax
     * Fact ID: lineitem.l_tax
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("lineitem.l_tax", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: O totalprice
 * Fact ID: orders.o_totalprice
 */

export const OTotalprice = {
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: O totalprice
     * Fact ID: orders.o_totalprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("orders.o_totalprice", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: P retailprice
 * Fact ID: part.p_retailprice
 */

export const PRetailprice = {
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: P retailprice
     * Fact ID: part.p_retailprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("part.p_retailprice", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: P size
 * Fact ID: part.p_size
 */

export const PSize_2 = {
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: P size
     * Fact ID: part.p_size
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("part.p_size", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: S acctbal
 * Fact ID: supplier.s_acctbal
 */

export const SAcctbal = {
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: S acctbal
     * Fact ID: supplier.s_acctbal
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("supplier.s_acctbal", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: L receiptdate - Date
 * Display Form ID: l_receiptdate.day
 */

export const LReceiptdateDate = newAttribute("l_receiptdate.day");
/**
 * Attribute Title: L receiptdate - Day of Month
 * Display Form ID: l_receiptdate.dayOfMonth
 */

export const LReceiptdateDayOfMonth = newAttribute("l_receiptdate.dayOfMonth");
/**
 * Attribute Title: L receiptdate - Day of Week
 * Display Form ID: l_receiptdate.dayOfWeek
 */

export const LReceiptdateDayOfWeek = newAttribute("l_receiptdate.dayOfWeek");
/**
 * Attribute Title: L receiptdate - Day of Year
 * Display Form ID: l_receiptdate.dayOfYear
 */

export const LReceiptdateDayOfYear = newAttribute("l_receiptdate.dayOfYear");
/**
 * Attribute Title: L receiptdate - Month/Year
 * Display Form ID: l_receiptdate.month
 */

export const LReceiptdateMonthYear = newAttribute("l_receiptdate.month");
/**
 * Attribute Title: L receiptdate - Month of Year
 * Display Form ID: l_receiptdate.monthOfYear
 */

export const LReceiptdateMonthOfYear = newAttribute("l_receiptdate.monthOfYear");
/**
 * Attribute Title: L receiptdate - Quarter/Year
 * Display Form ID: l_receiptdate.quarter
 */

export const LReceiptdateQuarterYear = newAttribute("l_receiptdate.quarter");
/**
 * Attribute Title: L receiptdate - Quarter of Year
 * Display Form ID: l_receiptdate.quarterOfYear
 */

export const LReceiptdateQuarterOfYear = newAttribute("l_receiptdate.quarterOfYear");
/**
 * Attribute Title: L receiptdate - Week/Year
 * Display Form ID: l_receiptdate.week
 */

export const LReceiptdateWeekYear = newAttribute("l_receiptdate.week");
/**
 * Attribute Title: L receiptdate - Week of Year
 * Display Form ID: l_receiptdate.weekOfYear
 */

export const LReceiptdateWeekOfYear = newAttribute("l_receiptdate.weekOfYear");
/**
 * Attribute Title: L receiptdate - Year
 * Display Form ID: l_receiptdate.year
 */

export const LReceiptdateYear = newAttribute("l_receiptdate.year");
/**
 * Attribute Title: L shipdate - Date
 * Display Form ID: l_shipdate.day
 */

export const LShipdateDate = newAttribute("l_shipdate.day");
/**
 * Attribute Title: L shipdate - Day of Month
 * Display Form ID: l_shipdate.dayOfMonth
 */

export const LShipdateDayOfMonth = newAttribute("l_shipdate.dayOfMonth");
/**
 * Attribute Title: L shipdate - Day of Week
 * Display Form ID: l_shipdate.dayOfWeek
 */

export const LShipdateDayOfWeek = newAttribute("l_shipdate.dayOfWeek");
/**
 * Attribute Title: L shipdate - Day of Year
 * Display Form ID: l_shipdate.dayOfYear
 */

export const LShipdateDayOfYear = newAttribute("l_shipdate.dayOfYear");
/**
 * Attribute Title: L shipdate - Month/Year
 * Display Form ID: l_shipdate.month
 */

export const LShipdateMonthYear = newAttribute("l_shipdate.month");
/**
 * Attribute Title: L shipdate - Month of Year
 * Display Form ID: l_shipdate.monthOfYear
 */

export const LShipdateMonthOfYear = newAttribute("l_shipdate.monthOfYear");
/**
 * Attribute Title: L shipdate - Quarter/Year
 * Display Form ID: l_shipdate.quarter
 */

export const LShipdateQuarterYear = newAttribute("l_shipdate.quarter");
/**
 * Attribute Title: L shipdate - Quarter of Year
 * Display Form ID: l_shipdate.quarterOfYear
 */

export const LShipdateQuarterOfYear = newAttribute("l_shipdate.quarterOfYear");
/**
 * Attribute Title: L shipdate - Week/Year
 * Display Form ID: l_shipdate.week
 */

export const LShipdateWeekYear = newAttribute("l_shipdate.week");
/**
 * Attribute Title: L shipdate - Week of Year
 * Display Form ID: l_shipdate.weekOfYear
 */

export const LShipdateWeekOfYear = newAttribute("l_shipdate.weekOfYear");
/**
 * Attribute Title: L shipdate - Year
 * Display Form ID: l_shipdate.year
 */

export const LShipdateYear = newAttribute("l_shipdate.year");
/**
 * Attribute Title: O orderdate - Date
 * Display Form ID: o_orderdate.day
 */

export const OOrderdateDate = newAttribute("o_orderdate.day");
/**
 * Attribute Title: O orderdate - Day of Month
 * Display Form ID: o_orderdate.dayOfMonth
 */

export const OOrderdateDayOfMonth = newAttribute("o_orderdate.dayOfMonth");
/**
 * Attribute Title: O orderdate - Day of Week
 * Display Form ID: o_orderdate.dayOfWeek
 */

export const OOrderdateDayOfWeek = newAttribute("o_orderdate.dayOfWeek");
/**
 * Attribute Title: O orderdate - Day of Year
 * Display Form ID: o_orderdate.dayOfYear
 */

export const OOrderdateDayOfYear = newAttribute("o_orderdate.dayOfYear");
/**
 * Attribute Title: O orderdate - Month/Year
 * Display Form ID: o_orderdate.month
 */

export const OOrderdateMonthYear = newAttribute("o_orderdate.month");
/**
 * Attribute Title: O orderdate - Month of Year
 * Display Form ID: o_orderdate.monthOfYear
 */

export const OOrderdateMonthOfYear = newAttribute("o_orderdate.monthOfYear");
/**
 * Attribute Title: O orderdate - Quarter/Year
 * Display Form ID: o_orderdate.quarter
 */

export const OOrderdateQuarterYear = newAttribute("o_orderdate.quarter");
/**
 * Attribute Title: O orderdate - Quarter of Year
 * Display Form ID: o_orderdate.quarterOfYear
 */

export const OOrderdateQuarterOfYear = newAttribute("o_orderdate.quarterOfYear");
/**
 * Attribute Title: O orderdate - Week/Year
 * Display Form ID: o_orderdate.week
 */

export const OOrderdateWeekYear = newAttribute("o_orderdate.week");
/**
 * Attribute Title: O orderdate - Week of Year
 * Display Form ID: o_orderdate.weekOfYear
 */

export const OOrderdateWeekOfYear = newAttribute("o_orderdate.weekOfYear");
/**
 * Attribute Title: O orderdate - Year
 * Display Form ID: o_orderdate.year
 */

export const OOrderdateYear = newAttribute("o_orderdate.year");
export const Insights = {
    /**
     * Insight Title: jh
     * Insight ID: 4702ec07-4605-47ef-b0ac-6c48494924f1
     */
    Jh: "4702ec07-4605-47ef-b0ac-6c48494924f1",
    /**
     * Insight Title: Some Visualization Object
     * Insight ID: some_visualization_object
     */
    SomeVisualizationObject: "some_visualization_object",
};
