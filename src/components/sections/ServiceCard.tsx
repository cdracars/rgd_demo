import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface ServiceCardProps {
  service: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-center gap-4">
          {service.icon && <service.icon className="h-6 w-6 text-primary" />}
          <div>
            <CardTitle className="text-xl font-bold text-card-foreground">
              {service.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
