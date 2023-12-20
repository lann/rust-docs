(function() {var type_impls = {
"spin_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#54\">source</a><a href=\"#impl-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#56\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h4></section></summary><div class=\"docblock\"><p>Builds a new empty Captures</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_owned\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#64\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.into_owned\" class=\"fn\">into_owned</a>(self) -&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'static, 'static&gt;</h4></section></summary><div class=\"docblock\"><p>Transforms this Captures into a ’static Captures which can\noutlive the source data. This allocates new strings if needed,\nand should be avoided unless necessary for a particular\napplication</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.params\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#72\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.params\" class=\"fn\">params</a>(&amp;self) -&gt; &amp;[<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'_, '_&gt;]</h4></section></summary><div class=\"docblock\"><p>returns a slice of captures</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_wildcard\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#78\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.set_wildcard\" class=\"fn\">set_wildcard</a>(&amp;mut self, wildcard: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'values, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>set the captured wildcard to the provided &amp;str or\nString. Prefer passing a &amp;str if available.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wildcard\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#83\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.wildcard\" class=\"fn\">wildcard</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>returns what the * wildcard matched, if any</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#88\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, key: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>checks the list of params for a matching key</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#99\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.push\" class=\"fn\">push</a>(&amp;mut self, capture: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'keys, 'values&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Add the provided Capture (or capture-like) to the end of the params</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#104\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.append\" class=\"fn\">append</a>(&amp;mut self, captures: <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;)</h4></section></summary><div class=\"docblock\"><p>Combine two captures</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#110\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; Iter&lt;'_, '_, '_&gt;</h4></section></summary><div class=\"docblock\"><p>Iterate over params as str pairs</p>\n</div></details></div></details>",0,"spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#123\">source</a><a href=\"#impl-DerefMut-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#124\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut &lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#115\">source</a><a href=\"#impl-Deref-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'keys, 'values&gt;&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#118\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CF%3E-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#149-151\">source</a><a href=\"#impl-From%3CF%3E-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;F&gt; for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (&amp;'keys <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, &amp;'values <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>)&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#153\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(f: F) -&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<F>","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3CI%3E-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#158-159\">source</a><a href=\"#impl-FromIterator%3CI%3E-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;I&gt; for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'keys, 'values&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#161\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;T&gt;(iter: T) -&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = I&gt;,</div></h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<I>","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#48\">source</a><a href=\"#impl-Debug-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#48\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#48\">source</a><a href=\"#impl-Default-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#48\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3CI%3E-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#169\">source</a><a href=\"#impl-Extend%3CI%3E-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;I&gt; for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'keys, 'values&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#170\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T&gt;(&amp;mut self, iter: T)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = I&gt;,</div></h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#376\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#384\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<I>","spin_sdk::http::router::Params"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-Captures%3C'keys,+'values%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#175\">source</a><a href=\"#impl-IntoIterator-for-Captures%3C'keys,+'values%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'keys, 'values&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = <a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Capture.html\" title=\"struct routefinder::captures::Capture\">Capture</a>&lt;'keys, 'values&gt;</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/into_iter/struct.IntoIter.html\" title=\"struct alloc::vec::into_iter::IntoIter\">IntoIter</a>&lt;&lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/routefinder/0.5.3/src/routefinder/captures.rs.html#180\">source</a><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; &lt;<a class=\"struct\" href=\"https://docs.rs/routefinder/0.5.3/routefinder/captures/struct.Captures.html\" title=\"struct routefinder::captures::Captures\">Captures</a>&lt;'keys, 'values&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a></h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","spin_sdk::http::router::Params"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()