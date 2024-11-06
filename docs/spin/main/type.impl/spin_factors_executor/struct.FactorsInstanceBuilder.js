(function() {
    var type_impls = Object.fromEntries([["spin_trigger",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FactorsInstanceBuilder%3C'a,+T,+U%3E\" class=\"impl\"><a href=\"#impl-FactorsInstanceBuilder%3C'a,+T,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, U&gt; FactorsInstanceBuilder&lt;'a, T, U&gt;<div class=\"where\">where\n    T: RuntimeFactors,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.app_component\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">app_component</a>(&amp;self) -&gt; &amp;AppComponent&lt;'_&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the app component for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_builder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">store_builder</a>(&amp;mut self) -&gt; &amp;mut StoreBuilder</h4></section></summary><div class=\"docblock\"><p>Returns the store builder for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.factor_builders\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">factor_builders</a>(\n    &amp;mut self,\n) -&gt; &amp;mut &lt;T as RuntimeFactors&gt;::InstanceBuilders</h4></section></summary><div class=\"docblock\"><p>Returns the factor instance builders for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.factor_builder\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">factor_builder</a>&lt;F&gt;(\n    &amp;mut self,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut &lt;F as Factor&gt;::InstanceBuilder&gt;<div class=\"where\">where\n    F: Factor,</div></h4></section></summary><div class=\"docblock\"><p>Returns the specific instance builder for the given factor.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wasmtime_engine\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">wasmtime_engine</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\">Engine</a></h4></section></summary><div class=\"docblock\"><p>Returns the underlying wasmtime engine for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.component\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">component</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/component/component/struct.Component.html\" title=\"struct wasmtime::runtime::component::component::Component\">Component</a></h4></section></summary><div class=\"docblock\"><p>Returns the compiled component for the instance.</p>\n</div></details></div></details>",0,"spin_trigger::TriggerInstanceBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FactorsInstanceBuilder%3C'a,+T,+U%3E\" class=\"impl\"><a href=\"#impl-FactorsInstanceBuilder%3C'a,+T,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T, U&gt; FactorsInstanceBuilder&lt;'a, T, U&gt;<div class=\"where\">where\n    T: RuntimeFactors,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate\" class=\"method\"><h4 class=\"code-header\">pub async fn <a class=\"fn\">instantiate</a>(\n    self,\n    executor_instance_state: U,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://docs.rs/wasmtime/25.0.3/wasmtime/runtime/component/instance/struct.Instance.html\" title=\"struct wasmtime::runtime::component::instance::Instance\">Instance</a>, Store&lt;InstanceState&lt;&lt;T as RuntimeFactors&gt;::InstanceState, U&gt;&gt;), <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.89/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiates the instance with the given executor instance state</p>\n</div></details></div></details>",0,"spin_trigger::TriggerInstanceBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4647]}