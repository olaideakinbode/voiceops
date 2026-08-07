export default function DashboardPage() {
  return (
    <div className="p-8">
  
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Active Calls</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">128</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Escalations</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">4</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Avg. Duration</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">2m 14s</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">Success Rate</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">97.4%</p>
        </div>
      </div>

      <div className="mt-8">
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-slate-900">
      Live Operations
    </h2>

    <p className="text-sm text-slate-500">
      Monitor active voice sessions and operational status
    </p>
  </div>

  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
    <div className="grid grid-cols-4 border-b border-slate-200 px-5 py-3 text-xs font-medium uppercase tracking-wide text-slate-500">
      <span>Agent</span>
      <span>Session</span>
      <span>Status</span>
      <span>Duration</span>
    </div>

    <div className="grid grid-cols-4 items-center px-5 py-4 text-sm">
      <span className="font-medium text-slate-900">
        Support Agent
      </span>

      <span className="text-slate-500">
        #VO-1048
      </span>

      <span className="text-emerald-600">
        ● Active
      </span>

      <span className="text-slate-500">
        02:14
      </span>
    </div>

    <div className="grid grid-cols-4 items-center border-t border-slate-200 px-5 py-4 text-sm">
      <span className="font-medium text-slate-900">
        Sales Agent
      </span>

      <span className="text-slate-500">
        #VO-1047
      </span>

      <span className="text-emerald-600">
        ● Active
      </span>

      <span className="text-slate-500">
        01:38
      </span>
    </div>

    <div className="grid grid-cols-4 items-center border-t border-slate-200 px-5 py-4 text-sm">
      <span className="font-medium text-slate-900">
        Support Agent
      </span>

      <span className="text-slate-500">
        #VO-1046
      </span>

      <span className="text-amber-600">
        ● Escalated
      </span>

      <span className="text-slate-500">
        04:21
      </span>
    </div>
  </div>
</div>
    </div>

    
  );
}